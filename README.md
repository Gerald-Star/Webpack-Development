## Webpack

## webpack documentation



## Instal Sass
npm i -D saas style-loader css-loader sass-loader (all these are D)

Learn Sass variables

Instal the html plugin webpack D
npm i -D html-webpack-plugin
once the html-webpack-plugin -D is installed, set it through the const path and plugins on the module
to run the html set a template on the plugin for the src/template.html


## Caching Webpack
link https://webpack.js.org/guides/caching/

first delete the dist
use the documentation and set the contenthash
run npm run build

## set the server

on the package.json, set the scripts
dev: webpack serve
run - npm run dev (not build)
click 'y' when asked if you wanna instal webpack-dev-server


## To avoid running multiple files on the bundle

set on the output, clean to true. This keeps only one file.

## Add source map using devtool  to help you debug

under the output set
devtool: 'source-map',
run - npm run build - this will show the second bundle.map which you can use in the browser for debugging

## Babel loader

Install Babel for code compatibility
To instal Babel instal npm i -D babel-loader @babel/core @babel/preset-env
On the modules add the rules: test 
exclude the node_modules
use : loader: babel-loader
set options: presets and pass the @babel/preset-env
- run npm run build


## To upload an image
in webpack.config.js add the access loader extension
test: (png|svg|jpg|jpeg|gif)$/,
type: 'asset'/resource

## install axios

npm i axios

run - npm run dev

On the output set the assetModuleFilename:'[name][ext]'
