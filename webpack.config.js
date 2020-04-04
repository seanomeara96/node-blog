const currentTask = process.env.npm_lifecycle_event
const path = require('path')
// Remove these & uninstall
// const {CleanWebpackPlugin} = require('clean-webpack-plugin')
// const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// const HtmlWebpackPlugin = require('html-webpack-plugin')
const fse = require('fs-extra')
let postcssPlugins = [
    require('postcss-import'),
    require('postcss-mixins'),
    require('postcss-simple-vars'),
    require('postcss-nested'),
    require('postcss-hexrgba'),
    require('autoprefixer'),
    require('cssnano')
]
let cssOptions = {loader:'postcss-loader',options:{plugins: postcssPlugins}}
let cssConfig = {
    test:/\.css$/i,
    use:['css-loader?url=false',cssOptions]
}
let config = {
    module:{
        rules:[]
    }
}
if(currentTask == 'bundlejs'){
    config.entry = './frontend-js/scripts.js'
    config.mode="development"
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
    config.output = {
        filename:'scripts-bundled.js',
        path: path.resolve(__dirname, "frontend-js")
    }
}
if (currentTask == 'bundlecss') {
    config.entry = "./public/styles.css"
    config.mode="development"
    config.module.rules.push(cssConfig)
    config.output = {
        filename: 'styles-bundled.css',
        path: path.resolve(__dirname,'public')
    }
}

module.exports = config
