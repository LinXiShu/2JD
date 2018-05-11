


<?php
/**
 * @Author: Marte
 * @Date:   2018-05-11 14:20:30
 * @Last Modified by:   Marte
 * @Last Modified time: 2018-05-11 22:27:35
 */

    $page = isset($_GET['page']) ? $_GET['page'] : 1;
    $qty = isset($_GET['qty']) ? $_GET['qty'] : 20;
    
    $price = array(998,888,666,98.99,48.89,10086,110);
    $color = array('黑色','红色','土豪金','绿色','灰色','玫瑰金');

    // 创建数值数组
    $goodslist = array();

    for($i=0;$i<500;$i++){
        $imgNum = $i%77;
        // 创建关联数组

        // array_rand();
        // 从数组中取出一个或多个随机的单元，
        // 并返回随机条目的一个或多个键。

        $goods = array(
            'id'     => 'g'.$i,
            'name'   => '畅销商品'.$i,
            'price'  => $price[array_rand($price)],
            'imgurl' => "img/$imgNum.jpg",
            'color'  => $color[array_rand($color)]
        );

        $goodslist[] = $goods;

    }

    // 根据分页/数量截取不同的数据
    $data = array_slice($goodslist,($page-1)*$qty,$qty);

    // echo $data;

    // 格式化数据
    $res = array(
        'total' => count($goodslist),
        'page'  => $page*1,
        'qty'   => $qty*1,
        'data'  => $data
    );

    echo json_encode($res,JSON_UNESCAPED_UNICODE);

?>


