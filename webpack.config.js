const currentTask = process.env.npm_lifecycle_event
const path = require('path')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const fse = require('fs-extra')

let postcssPlugins = [
    require('postcss-import'),
    require('postcss-mixins'),
    require('postcss-simple-vars'),
    require('postcss-nested'),
    require('postcss-hexrgba'),
    require('autoprefixer')
]
class RunAfterCompile{
    apply(compiler){
        compiler.hooks.done.tap('copy images',()=>{
            fse.copySync('./app/assets/images','./docs/assets/images')
        })
    }
}
let cssOptions = {loader:'postcss-loader',options:{plugins: postcssPlugins}}
let cssConfig = {
    test:/\.css$/i,
    use:['css-loader?url=false',cssOptions]
}
let pages = fse.readdirSync('./app').filter(x => x.endsWith('.html')).map(x => new HtmlWebpackPlugin({
    filename: x,
    template: `./app/${x}`
}))
let config = {
    entry:'./app/assets/scripts/App.js',
    plugins: pages,
    module:{
        rules:[
            cssConfig
        ]
    }
}
if(currentTask == 'dev'){
    config.mode="development"
    cssConfig.use.unshift('style-loader')
    config.output = {
        path:path.resolve(__dirname,'app'),
        filename:'bundled.js'
    }
    config.devServer = {
        before: function (app, server){
            server._watch('./app/**/*.html')
        },
        contentBase: path.join(__dirname,'app'),
        hot:true,
        port:3000,
        host:'0.0.0.0'
    }
}
if(currentTask == 'build'){
    config.mode="production"
    config.module.rules.push({
        test: /\.js$/,
        exclude:/(node_modules)/,
        use:{
            loader:"babel-loader",
            options:{
                presets:['@babel/preset-env']
            }
        }
    })
    cssConfig.use.unshift(MiniCssExtractPlugin.loader)
    
    postcssPlugins.push(require('cssnano'))
    config.output = {
        filename:'./assets/scripts/[name].[chunkhash].js',
        chunkFilename:'./assets/scripts/[name].[chunkhash].js',
        path: path.resolve(__dirname, 'docs')
    }
    config.optimization = {
        splitChunks:{chunks:"all"}
    }
    config.plugins.push(
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({filename:'./assets/styles/styles.[chunkhash].css'}),
        new RunAfterCompile()
    )
}

module.exports = config
