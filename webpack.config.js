// 导入html-webpack-plugin 包,获取到插件对象
        var htmlwp = require('html-webpack-plugin');

module.exports={
	entry:'./src/main.js',
	output:{
		path:__dirname+'/dist',
		filename:'build.js'
	},
	module:{
		loaders:[
			{
				test:/\.css$/,
				loader:'style-loader!css-loader'
			},
			{
				test:/\.scss$/,
				loader:'style-loader!css-loader!sass-loader'
			},
			{
				test:/\.less$/,
				loader:'style-loader!css-loader!less-loader'
			},
			{
				test:/\.(png|jpg|gif|ttf|svg)$/,
				loader:'url-loader?limit=20000'//limit表示如果路径文件大于20KB则把路径打包到buildjs中小于20k则直接转换成64位2进制打包到buildjs中
			},
			{
				test:/\.vue$/,
				loader:'vue-loader'
			}
		]
	},
	 plugins:[
        new htmlwp({
          title: '首页',  //生成的页面标题
          filename: 'index.html', //webpack-dev-server在内存中生成的文件名称，自动将build注入到这个页面底部，才能实现自动刷新功能
          template: 'index1.html' //根据index1.html这个模板来生成(这个文件请程序员自己生成)
        })
    ]
}