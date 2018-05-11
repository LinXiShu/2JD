

function animate(ele,opt,callback){
    // 记录动画的数量
    let timerLen = 0;

    // 遍历opt，获取所有attr和target
    for(var attr in opt){
        timerLen++;

        createTimer(attr);
    }
    function createTimer(attr){
        let target = opt[attr];

        // 设置定时器的名字与attr关联
        let timerName = attr + 'timer';//widthtimer,heighttimer,toptimer


        // 清除定时器，避免多个定时器用作于一个效果
        clearInterval(ele[timerName]);

        ele[timerName] = setInterval(()=>{
            // 获取当前值
            let current = getCss(ele,attr);//100px,45deg,0.5(string)

            // 提取单位
            let unit = current.match(/[a-z]+$/i);//[0:px,index:6,input:current],null

            // 三元运算实现提取单位
            unit = unit ? unit[0] : '';

            // 提取值
            current = parseFloat(current);

            // 计算缓冲速度
            let speed = (target-current)/10;//0.5=>1,-0.5=>-1


            // 避免速度为小数
            speed = speed>0 ? Math.ceil(speed) : Math.floor(speed);//1,-1

            // 针对opacity进行操作
            if(attr === 'opacity'){
                speed = speed>0 ? 0.05 : -0.05;
            }

            // 根据速度改变当前值
            current += speed;

            // 当到达目标指时
            if(current === target || speed === 0){
                clearInterval(ele[timerName]);

                // 避免超出target的范围
                current = target;

                // 每一个动画完成数量减一
                timerLen--;

                //动画结束后执行回掉函数
                // if(timerLen===0 && typeof callback === 'function'){
                //  callback();
                // }

                if(timerLen === 0){
                    typeof callback==='function' && callback();
                }
            }
            ele.style[attr] = current + unit;
        },30);
    }
}