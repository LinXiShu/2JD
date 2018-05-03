/**
 * [生成任意范围内随机整数的函数]
 * @param  {Number} min [最小值]
 * @param  {Number} max [最大值]
 * @return {Number}     [随机整数]
 */
function randomNumber(min,max){
	return parseInt(Math.random()*(max-min+1))+min;
}

/**
 * [随机颜色]
 * @param  {[Number]} n [是否生成16进制颜色]
 * @return {[String]}   [返回随机颜色]
 */
function randomColor(n){
	if(n===16){
		var str = '0123456789abcdef';

		var color = '#';

		for(var i=0;i<6;i++){
			// 随机获取一个字符
			var idx = parseInt(Math.random()*str.length);
			color += str[idx];
		}
		return color;
		
	}


}


function showTime(end,callback){
	// 2）不断拿当前时间跟结束时间对比，计算差值
	var offset = Date.parse(end) - Date.now();

	// 3）把差值转换成《剩余时间》
	// 毫秒->秒
	offset = parseInt(offset/1000);

	// 5）倒计时结束时
	if(offset <= 0){
		// * 停止定时器
		clearInterval(timer);

		if(typeof callback === 'function'){
			callback();
		}
	}

	// 23s	0:0:23
	// 65s	0:1:5
	// 5m	0:5:0
	// 85m	1:25:0
	var sec = offset%60;//剩余秒数
	var min = parseInt(offset/60)%60;//剩余分数
	var hour = parseInt(offset/60/60)%24;//剩余小时数
	var day = parseInt(offset/60/60/24);//天数

	// 补0操作
	sec = sec<10 ? '0'+sec : sec;
	min = min<10 ? '0'+min : min;
	hour = hour<10 ? '0'+hour : hour;

	return day + '天' + hour + '时' + min + '分' + sec + '秒'

	// console.log(offset)
}


var Element = {
	get:function(node){
		var res = [];
		for(var i=0;i<node.length;i++){
			if(node[i].nodeType === 1){
				res.push(node[i]);
			}
		}

		return res;
	},

	// 获取ele下的所有元素
	children:function(ele){
		return this.get(ele.childnodes);
	},

	// 获取ele的前一个元素
	prev:function(ele){

	},

	next:function(ele){

	}
}

// Element.next(ele)
// Element.children(ele);//


// class="content box box2"
function getElementByClassName(name){
	var ele = document.getElementByTagName('*');
	var res = [];
	for(var i=0;i<ele.length;i++){
		var className = ele[i].className.split(' ');
	}
}


/**
 * [获取css样式，兼容IE8-]
 * @param  {Element} ele [获取样式的元素]
 * @param  {String} key [css属性]
 * @return {String}     [返回key对应的css属性值]
 */
function getCss(ele,key){
	// 判断是否支持getComputedStyle
	if(window.getComputedStyle){
		// 标准浏览器
		return getComputedStyle(ele)[key]
	}else if(ele.currentStyle){
		// IE8-
		return ele.currentStyle[key]
	}else{
		// 返回内联样式
		return ele.style[key]
	}
}


// getCss(box,'fontSize')

/**
 * [绑定事件函数,兼容IE8-]
 * @param  {Elment}   ele       [绑定事件的元素]
 * @param  {String}   type      [事件类型,不带on]
 * @param  {Function} fn        [事件处理函数]
 * @param  {Boolean}  isCapture [是否捕获]
 */
function bind(ele,type,fn,isCapture){
	if(ele.addEventListener){
		ele.addEventListener(type,fn,isCapture);
	}else if(ele.attachEvent){
		ele.attachEvent('on'+type,fn);
	}else{
		// DOM节点绑定方式
		// ele.onclick = function(){}
		ele['on'+type] = fn;
	}
}
//bind(ele,type,fn,isCapture)
//bind(box,'click',function(){},true)


var Cookie = {
	get:function(name){
		// 获取所有
		var cookies = document.cookie;

		// 转成数组
		cookies = cookies.split('; ');//['goodslist=[]','your=lemon']

		var res = '';
		for(var i=0;i<cookies.length;i++){
			// 拆分cookieName和cookieValue
			var arr = cookies[i].split('=');
			if(arr[0] === name){
				res = arr[1];
				break;
			}
		}

		return res;

	},
	/**
	 * [设置cookie]
	 * @param {String} name  [cookie名]
	 * @param {String} value [cookie值]
	 * @param {[Object]} param [cookie参数]
	 	* {expires,path,secure,domain}
	 */
	set:function(name,value,param){
		//param = {expires,path,secure,domain}
		var cookie = name + '=' + value;

		if(param){
			// 有效期
			if(param.expires){
				cookie += ';expires='+param.expires.toUTCString();
			}

			// 保存路径
			if(param.path){
				cookie += ';path=' + param.path;
			}

			// 域名
			if(param.domain){
				cookie += ';domain=' + param.domain;
			}

			// 安全性
			if(param.secure){
				cookie += ';secure'
			}

		}
		
		document.cookie = cookie;

	},
	remove:function(name,path){
		// 原理：设置过期时间达到删除效果
		var now = new Date();
		now.setDate(now.getDate()-1);

		this.set(name,null,{expires:now,path:path});
	},

}


// Cookie.remove();