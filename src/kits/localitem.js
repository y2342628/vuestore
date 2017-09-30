//导出设置到localStorage

export function setItem(obj,type){
	if(!type){
		type='add'
	}

	var str=localStorage.getItem('twogoods')||'[]';
	var goodsarr=JSON.parse(str);
	//添加标记  如果当前localStorage中没有数据  直接进入push阶段 并且新添加的数据如果在当前对象中没有才
	var flag=true;
	for(var i=0;i<goodsarr.length;i++){
		if(goodsarr[i].goodid==obj.id){
			//判断是加入购物车页面传来的数据还是购物车结算页面传来的数据
			if(type=='add'){
				goodsarr[i].goodcount+=obj.count;
				
			}else{
				goodsarr[i].goodcount=obj.count
			}
			flag=false;
		}
	}
	if(flag){
		goodsarr.push({
			goodid:obj.id,
			goodcount:obj.count
		})
	}
	//添加到本地存储
	localStorage.setItem('twogoods',JSON.stringify(goodsarr))
}



//导出获取localStorage的对象  方便操作
export function getgoodsobj(){
	var str=localStorage.getItem('twogoods')||'[]';
	var goodsarr=JSON.parse(str);
	var goodsobj={};
	for(var i=0;i<goodsarr.length;i++){
		if(!goodsobj[goodsarr[i].goodid]){
			goodsobj[goodsarr[i].goodid]=goodsarr[i].goodcount
		}
	}
	return goodsobj
}

//到处删除localStorage中对象的方法
export function removeobj(id){
	var str=localStorage.getItem('twogoods')||'[]';
	var goodsarr=JSON.parse(str)
	for(var i=0;i<goodsarr.length;i++){
		if(goodsarr[i].goodid==id){
			goodsarr.splice(i,1)
			break;
		}
	}
	localStorage.setItem('twogoods',JSON.stringify(goodsarr))
}
