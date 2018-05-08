/* 
* @Author: Marte
* @Date:   2018-05-08 17:19:10
* @Last Modified by:   Marte
* @Last Modified time: 2018-05-08 21:00:12
*/

function randomNumber( min, max){
    //  Math.random() 0~1 的随机小数
    //  Math.random()*
    return parseInt(Math.random()*(max-min+1))+min;
}

function randomRgb() {
 var r = Math.floor(Math.random() * 256);
 var g = Math.floor(Math.random() * 256);
 var b = Math.floor(Math.random() * 256);
 return `rgb(${r},${g},${b})`; 
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
};

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

