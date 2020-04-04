const currentTask = process.env.npm_lifecycle_event
const path = require('path')
// Remove these & uninstall
// const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const DisableOutputWebpackPlugin = require('disable-output-webpack-plugin')
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

let config = {
    entry: './frontend-js/scripts.js',
    mode:"development",
    module:{
        rules:[
            {
                test: /\.js$/,
                exclude:/(node_modules)/,
                use:{
                    loader:"babel-loader",
                    options:{
                        presets:['@babel/preset-env']
                    }
                }
            },
            {
                test:/\.css$/i,
                use:[
                    {
                        loader:MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: './public'
                        }
                    },
                    'css-loader?url=false',
                    cssOptions
                ]
            }
        ]
    },
    plugins:[new MiniCssExtractPlugin({filename:"styles-bundled.css"})],
    output: {
        filename:'scripts-bundled.js',
        path: path.resolve(__dirname, "public")
    }
}


module.exports = config
