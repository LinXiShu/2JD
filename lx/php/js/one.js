

/* 
* @Author: Marte
* @Date:   2018-05-11 14:20:57
* @Last Modified by:   Marte
* @Last Modified time: 2018-05-11 22:51:02
*/

// onreadystatechange
// 
// 

// // 创建一个请求
// let xhr = new XMLHttpRequest();

// xhr.onreadystatechange = () => {

//     if(xhr.readyState === 4){   

//         let data = JSON.parse(xhr.responseText)

//         data.map(item=>{
//             return `
                
//             `
//         })
//     }   
// }



// // type 请求类型， api数据接口地址 是否异步
// xhr.open('get', "../api/one.php", true);

// // 向服务器发起请求
// xhr.send();

// <div class="container">
//     <h1>商品列表</h1>
//     <div class="goodslist"></div>
//     <div class="page"></div>
// </div>

    
        document.addEventListener('DOMContentLoaded',()=>{
            // 获取页面元素
            let goodslist = document.querySelector('.goodslist');
            let page = document.querySelector('.page');

            let qty = 16;

            // 1.创建请求对象,返回一个异步请求对象{}
            let xhr = new XMLHttpRequest();//readyState:0

            // 4.处理数据
            // 在js代码中操作数据
            xhr.onreadystatechange = ()=>{
                console.log(xhr.readyState);
                if(xhr.readyState === 4){
                    //数据完全接收
                    //responseText
                    let data = JSON.parse(xhr.responseText);//{data:[]}
                    console.log(data);

                    // 创建ul
                    let ul = document.createElement('ul');

                    // 根据数据生成html结构
                    ul.innerHTML = data.data.map(item=>{
                        return `
                            <li data-guid="${item.id}">
                                <img src="${item.imgurl}" />
                                <h4>${item.name}</h4>
                                <p class="price">价格：<span>${item.price}</span></p>
                                <p class="color">颜色：<span>${item.color}</span></p>
                            </li>
                        `
                    }).join('\n');

                    // 把ul写入页面
                    goodslist.innerText = '';
                    goodslist.appendChild(ul);


                    // 创建分页
                    let page_item = document.createElement('ul');
                    let page_num = Math.ceil(data.total/data.qty);

                    let content = '';
                    for(let i=1;i<=page_num;i++){
                        if(i === data.page){
                            content += `<li class="active">${i}</li>`;
                        }else{

                            content += `<li>${i}</li>`;
                        }
                    }
                    page_item.innerHTML = content;
                    page.innerText = '';
                    page.appendChild(page_item);
                }
            }

            // 2.设置请求参数，建立与服务器连接
            // open(type,api,async)
            // * type 请求类型
            // * api  数据接口地址(建议使用相对路径)
            // * 是否异步
            // xhr.open("get", "http://localhost:10086/api/goodslist.php", true);
            xhr.open("get", "../api/one.php/?qty="+qty, true);// readyState:1

            // 3.向服务器发送请求
            xhr.send();//readyState:2

            

            // 点击切换分页
            page.onclick = e=>{
                if(e.target.tagName.toLowerCase() === 'li'){
                    xhr.open("get", "../api/one.php?page="+e.target.innerText +'&qty='+qty, true);
                    xhr.send();
                }
            }
        })