const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin =
require('webpack/lib/container/ModuleFederationPlugin');
module.exports = {
 mode : 'development',
 devServer : {
 port : 3001,
 historyApiFallback : {
 index : '/index.html'
},
},
resolve: {
extensions: [".ts", ".tsx", ".js", ".jsx"],
},
plugins : [
new HtmlWebpackPlugin({
template : './public/index.html'
}),
new ModuleFederationPlugin({
name : 'paymentList',
filename : 'remoteEntry.js',
exposes :
{'./PaymentList' : './src/indexPaymentList'}
}
)
],
module: {
rules: [
{
test: /\.(js|jsx|tsx|ts)$/,
loader: "ts-loader",
exclude: /node_modules/,
},
{
test: /\.css$/,
exclude: /node_modules/,
use: [ 'style-loader', 'css-loader' ]
}
]
}
};