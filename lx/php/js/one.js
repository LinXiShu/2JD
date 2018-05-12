


/* 
* @Author: Marte
* @Date:   2018-05-11 14:20:57
* @Last Modified by:   Marte
* @Last Modified time: 2018-05-12 18:36:59
*/

// onreadystatechange

// 第一步创建异步请求对象:
// let xhr = new XMLHttpRequest();

// xhr.onreadystatechange = () => {

// // 判断请求是否成功
//     if(xhr.readyState === 4){   

//         let data = JSON.parse(xhr.responseText)

//         data.map(item=>{
//             return `
//                  // 数据生成列表
//             `
//         })
//     }   
// }

// // type 请求类型， api数据接口地址 是否异步
// xhr.open('get', "../api/one.php", true);

// // 向服务器发起请求
// xhr.send();
 
    let goodslist = document.querySelector('.goodslist');

    let page      = document.querySelector('.page');

    let qty       = 16;

    let xhr       = new XMLHttpRequest();

    xhr.onreadystatechange = () =>{

        // console.log(xhr.readyState);
        if(xhr.readyState === 4){

            let data = JSON.parse(xhr.responseText);

            console.log(data);
            
            let ul = document.createElement('ul');

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

            // 把 ul写入页面
            goodslist.innerText = '';
            goodslist.appendChild(ul);

// ------------------------------

            // 创建分页
            let box = document.createElement('ul');
            let lis = document.createElement('li');
   
        }

    };

    xhr.open('get', "../api/one.php?qty=" + qty, true);

    xhr.send();

    page.onclick = e =>{

        if(e.target.tagName.toLowerCase() === 'li'){

            xhr.open('get', "../api/one.php?page=" + e.target.innerText + '&qty=' + qty, true);

            xhr.send();

        }

    }