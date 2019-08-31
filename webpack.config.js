const HTMLWebpackPlugin=require('html-webpack-plugin');
const HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
	filename:'index.html',
	template:__dirname+'/app/index.html',
	inject:'body'
});

module.exports = {
	entry:__dirname+'/app/index.js',
	module:{
		rules:[
			{
				test:/.js$/,
				use:'babel-loader'
			},
			{
				test:/.css$/,
				use:['style-loader','css-loader']
			}
		]
	},
	output:{
		path:__dirname,
		filename:'bundle.js'
	},
	plugins:[HTMLWebpackPluginConfig]
}