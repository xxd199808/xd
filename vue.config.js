const path = require("path");
module.exports = {
    // 部署应用包时的基本 URL。
    publicPath: process.env.NODE_ENV === 'production'
        ? '/prodPath/'
        : '/',

    //当运行 vue-cli-service build 时生成的生产环境构建文件的目录。
    outputDir: 'dist',

    // 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录。
    assetsDir: 'static',

    // 指定生成的 index.html 的输出路径 (相对于 outputDir)。也可以是一个绝对路径。
    indexPath: 'index.html',

    // 默认情况下，生成的静态资源在它们的文件名中包含了 hash 以便更好的控制缓存。然而，这也要求 index 的 HTML 是被 Vue CLI 自动生成的。如果你无法使用 Vue CLI 生成的 index HTML，你可以通过将这个选项设为 false 来关闭文件名哈希。
    filenameHashing: true,

    // 生产环境下禁用lint
    // lintOnSave: process.env.NODE_ENV !== 'production',
    // 是否使用包含运行时编译器的 Vue 构建版本。设置为 true 后你就可以在 Vue 组件中使用 template 选项了，但是这会让你的应用额外增加 10kb 左右。
    runtimeCompiler: false,

    // 默认情况下 babel-loader 会忽略所有 node_modules 中的文件。如果你想要通过 Babel 显式转译一个依赖，可以在这个选项中列出来。
    transpileDependencies: [],

    // 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建。
    productionSourceMap: true,

    // 设置生成的 HTML 中 <link rel="stylesheet"> 和 <script> 标签的 crossorigin 属性。
    // crossorigin: undefined,
    // 在生成的 HTML 中的 <link rel="stylesheet"> 和 <script> 标签上启用 Subresource Integrity (SRI)。
    // integrity: false,
    // configureWebpack: Object | Function // 如果这个值是一个对象，则会通过 webpack-merge 合并到最终的配置中。如果这个值是一个函数，则会接收被解析的配置作为参数。
    // chainWebpack: // 是一个函数，会接收一个基于 webpack-chain 的 ChainableConfig 实例。允许对内部的 webpack 配置进行更细粒度的修改。
    // css.modules: false, // 默认情况下，只有 *.module.[ext] 结尾的文件才会被视作 CSS Modules 模块。设置为 true 后你就可以去掉文件名中的 .module 并将所有的 *.(css|scss|sass|less|styl(us)?) 文件视为 CSS Modules 模块。
    // css.extract: 生产环境下是 true，开发环境下是 false // 是否将组件中的 CSS 提取至一个独立的 CSS 文件中 (而不是动态注入到 JavaScript 中的 inline 代码)。
    // css.sourceMap: false, // 是否为 CSS 开启 source map。设置为 true 之后可能会影响构建的性能。
    // css.loaderOptions: {}, // 向 CSS 相关的 loader 传递选项
    devServer: {
        host: 'localhost',
        open: false,
        port: 1069, // 自定义修改8080端口
        // 代理跨域
        proxy: {
            '/nav': {
                target: 'http://localhost:3306/nav',// 代理地址，这里设置的地址会代替axios中设置的baseURL
                // ws: true,
                changeOrigin: true, // 如果接口跨域，需要进行这个参数配置
                // pathRewrite跨域地址重写
                // pathRewrite: {'^/api': '/'} 重写之后url为 http://192.168.1.16:8085/xxxx
                // pathRewrite: {'^/api': '/api'} 重写之后url为 http://192.168.1.16:8085/api/xxxx
                pathRewrite: {
                    '^/nav': '/'
                }
            }
        }
    },

    //parallel: require('os').cpus().length > 1, // 是否为 Babel 或 TypeScript 使用 thread-loader。该选项在系统的 CPU 有多于一个内核时自动启用，仅作用于生产构建。
    //pwa: // 向 PWA 插件传递选项。
    // 传递任何第三方插件选项
    pluginOptions: {
        'style-resources-loader': {
            preProcessor: 'less',
            patterns: [
                path.resolve(__dirname, './src/assets/css/_config.less')
            ]
        }
    }
};