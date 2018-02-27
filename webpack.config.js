var path=require("path") // 因为有些配置必须是绝对路径, 导入该模块进行处理
var HtmlWebpackPlugin = require('html-webpack-plugin') // webpack中所有的插件都需要导入后, 进行使用

// 导出webpack工具运行时所需的配置对象
module.exports={

    //入口文件配置
    entry:"./src/main.js",

    // 出口文件配置项
    output:{
        // 输出的路径，webpack规定必须是绝对路径
        path: path.join(__dirname, 'dist'),
        // publicPath:"/dist",
        // 输出文件名字
        filename:"bundle.js"
    },

    // 解析文件种类配置
    module:{

        rules:[

            // 配置用来解析css文件的loader
            {
                // 1.0 用正则匹配当前访问的文件的后缀名是  .css
                test: /\.css$/,
                use: ['style-loader', 'css-loader'] //webpack底层调用这些包的顺序是从右到左
            },

            // 解析less用的
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader']
            },

            // 解析图片字体用的, 以后可能需要修改该配置, 以支持更多的文件类型
            {
                test: /\.(png|jpg|gif|svg)/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 50000  // 小于这个字节的文件转换成base64
                    }
                }]
            },

            // 配置解析vue.webpack
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },

            // 解析ES6等新语法
            {
                test: /\.js$/,
                exclude: /node_modules/,  // 我们在main.js入口中导入的第三方包, 不需要解析, 所以这里排除, 好处是提高打包效率
                loader: 'babel-loader'
            }
           
        ]
    },

    // 用于解析html
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
            title:"个人微商"
        })
    ] 
}