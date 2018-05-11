




<?php
/**
* @Author: Marte
*  @Date:   2018-05-10 17:17:14
*  @Last Modified by:   Marte
*  @Last Modified time: 2018-05-10 19:21:17
  
  echo ： 可以输出多个字符串 速度快 用于返回 数据
  print_r：打印关于变量的信息，适用于数组、对象的打印，一般用于测试
  var_dump: 判断一个变量的类型与长度，
            并输出变量的数据类型和数值，一般用于测试
  命名规范：
        以 $ 符号开始，后面跟着变量的名称（$称为标识符，不属于变量组成部分）
        只能包含字母数字字符以及下划线（A-z、0-9 和 _ ）
        必须以字母或者下划线字符开始
        不能包含空格
        区分大小写  （变量-在第一次赋值时创建）
    
 **/
    
    $str  = "你是我的小小苹果！";

    echo "Hellow world";

    $age = array(
        "Peter"  =>    35,
        "Ben"    =>  "37",
        "Joe"    =>    45,
        "lemmon" =>   32.5  
    );

    echo "<br />";

    echo "<ul>
            <li >1</li>
            <li >2</li>
            <li >3</li>
            <li >4</li>
            <li >5</li>
            <li >6</li>
        </ul>
    ";

        $x = 'global';

        $x='global x';

    $x = 5;
    $y = 10;
        
    function show(){
    
    //把函数内 局部变量 变成 全局变量、
    global $x; 
        echo $x;
    };
    show();

    // 常量
    define("linxishu", "MM");

    echo linxishu;

    // 数组
    
    echo "<br /> <br />";

    $arr = array( '林夕树', 'zhaojianfeng', 'miaomiao', 'xiaoxiao');


    echo "<br /> <br />";
    // echo $arr;

    echo "<br /> <br />";
    print_r($arr);

    echo "<br /> <br />";
    var_dump($arr);

    echo count($arr);

    echo "<br /><br /><br />";
    
    // 面向对象，
    class Person{
    // 属性
        var $name;
        var $age = 10;
    // 方法
        function fanfa1($name){
            echo $name;
        }
        function fanfa2(){

        }

    }

   
?>