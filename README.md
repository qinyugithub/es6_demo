webpack 的基本配置步骤
1、三大件
webpack
webpack-cli
webpack-dev-server

2、处理 JS -> ES6   ES7 ES8   装饰器
6大件
babel-loader@7
babel-core
babel-preset-env

babel-plugin-transform-runtime

babel-plugin-transform-decorators
babel-plugin-transform-decorators-legacy

3、处理sass -> css ->style
4大件
sass-loader
node-sass
css-loader

postcss-loader 配合 autoprefixer (可自动加前缀，需要配置根据哪些浏览器版本来加)

style-loader

4、处理模板
ejs-loader  处理 ejs tpl

5、处理 HTML
html-webpack-plugin