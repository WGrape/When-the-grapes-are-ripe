### 2018 PHP 面试总结
- [2018 PHP 面试总结](https://segmentfault.com/a/1190000015651120)

### PHP unset 有哪些危害
1. 会改变索引数组的数据结构，如索引数组会变成关联数组。这样会导致在响应给前端的时候，Array 类型 变成 Object 类型。
2. 释放的变量 和 未释放的变量 问题 。

### PHP 非阻塞的实现方法
[PHP 非阻塞的实现方法](https://www.awaimai.com/660.html)


### 列出你知道的魔术方法 ，并说明他们的用途
PHP 将所有以 __（两个下划线）开头的类方法保留为魔术方法。所以在定义类方法时，除了上述魔术方法，不要以 __ 为前缀。

**__construct() 和 __destruct()**： 构造和析构

**__call() 和 __callStatic()**： 在对象中调用一个不可访问方法时，__call() 会被调用。在静态上下文中调用一个不可访问方法时，__callStatic() 会被调用。

**__get() 和 __set()**：在给不可访问属性赋值时，__set() 会被调用。读取不可访问属性的值时，__get() 会被调用。

**__isset() 和 __unset()**：当对不可访问属性调用 isset() 或 empty() 时，__isset() 会被调用。当对不可访问属性调用 unset() 时，__unset() 会被调用。

**__sleep() 和 __wakeup()**： 用于序列化

**__toString()**：__toString() 方法用于一个类被当成字符串时应怎样回应。例如 echo $obj; 应该显示些什么。此方法必须返回一个字符串。


**__invoke()**：当尝试以调用函数的方式调用一个对象时，__invoke() 方法会被自动调用。

**__clone()**：对象复制，当使用 ```clone $object``` 把$object对象复制后，会对对象的所有属性执行一个```浅复制```。当复制完成时，如果定义了 __clone() 方法，则新创建的对象（复制生成的对象）中的 __clone() 方法会被调用，可用于修改属性的值（如果有必要的话）。

**__debugInfo()**：此方法在会在调用 var_dump() 时调用。用于自定义的返回需要打印的数据

### PHP常用的字符串函数

### PHP超全局变量

- $GLOBALS
- $_SERVER
- $_GET
- $_POST
- $_FILES
- $_COOKIE
- $_SESSION
- $_REQUEST
- $_ENV


### 关于PHP的引用

1. PHP的返回引用
```php
class foo {
    public $value = 42;

    public function &getValue() {
        return $this->value;
    }
}

$obj = new foo;
$myValue = &$obj->getValue(); // $myValue is a reference to $obj->value, which is 42.
$obj->value = 2;
echo $myValue;                // prints the new value of $obj->value, which is 2.

// 和参数传递不同，这里必须在两个地方都用 & 符号 —— 指出返回的是一个引用，
// 而不是通常的一个拷贝，同样也指出 $myValue 是作为引用的绑定，而不是通常的赋值。
```

### 怎么优化 foreach ($rows50万 as $item){ $db->select(sql); }


### 讲讲连接池，并重点解释PHP的连接池



### 如何自定义配置$_SERVER常量

[参考1](https://nsimple.top/archives/config-php-server-var.html)

### 谈谈PHP的APC

- [参考](http://php.net/manual/zh/intro.apc.php)
- APC：Alternative PHP Cache (APC) 

### PHP开发中，使用什么加密存储密码

- 回答1 : md5( X )，只能想出 md5 的人不是优秀的

### talk about php static and static variable

### Mac 自带的PHP安装在哪个目录下？Mac默认的PHP配置文件在哪？
Mac默认的PHP配置文件在 ```/private/etc``` 目录下面，默认只有 ```php.ini.default``` 文件，所以 copy 一下这个文件并命名为 ```php.ini``` 即可。

### 谈谈 PHP 的 header() 函数 , header("Location: www.baidu.com") 的作用？

### Smarty 模板引擎是怎么输出HTML页面的 ？以及是如何让那些JS脚本和CSS样式生效的 ？
```php
header("Content-Type:application/json");
header("Content-Type:text/html; charset=UTF-8");
```

### PHP的 array_map() 函数

### PHP去除数组中的空值元素（array_filter）
[参考](http://www.phpernote.com/php-function/1052.html)

```php
<?php   
// 这种效率太低
foreach($arr as $k=>$v){
    if(!$v) unset($arr[$k]);   
}

// array_filter函数的功能是利用回调函数来对数组进行过滤，如果没有回调函数，那么默认就是删除数组中值为false的项目。如下示例：
$entry = array(   
	0 => 'foo',   
	1 => false,   
	2 => -1,   
	3 => NULL,   
	4 => ''
);
print_r(array_filter($entry));

// 输出为 Array   
// (   
//     [0] => foo   
//     [2] => -1   
// )
```

### PHP使用面向对象开发，但是没有命名空间的时候，代码咋还能跑？

### 如何配置PHP不同级别的日志，并找到对应的PHP日志文件

### ini_set() 函数及它的生效周期 和 error_reporting(level) 的几个错误级别

### php STDIN 和 PHP 的3个CLI常量(STDIN,STDOUT,STDERR) 是什么

看这个页面：http://php.net/manual/zh/wrappers.php.php  +  https://www.cnblogs.com/thinksasa/archive/2013/02/27/2935158.html + https://stackoverflow.com/questions/18137942/how-can-i-check-if-stdin-exists-in-php-php-cgi

我的理解就是，这三个常量，都是用于命令交互的函数/功能/函数，比如 C语言使用 scanf() 获取命令行的输入，
所以在PHP中，它们就是起到这种作用

### How can I check if stdin exists in PHP ( php-cgi )?

https://stackoverflow.com/questions/18137942/how-can-i-check-if-stdin-exists-in-php-php-cgi


### pathinfo() 函数

### 说几个 魔术常量 ？
__LINE__ , __FILE__ , __DIR__ , __CLASS__ , __TRAIT__ , __FUNCTION__ , __NAMESPACE__ , __METHOD__


### 谈谈 strrchr() 函数

strrchr — 查找指定字符在字符串中的最后一次出现

### chdir() 函数

改变当前的工作目录，经常和 getcwd() 配合使用

### 是否了解 set_magic_quotes_runtime() 和 magic_quotes_runtime() 函数

### strpos() 函数
strpos()函数查找字符串在另一字符串中第一次出现的位置（区分大小写）。

### What are register_globals in PHP?

https://stackoverflow.com/questions/3593210/what-are-register-globals-in-php

### register_globals = Off 和 register_globals = On的区别

为什么推荐 off ，而不是 on ？

### class_exists($name, FALSE)
第二个参数 false 表示不使用 auto_load 来判断类是否存在
也就是说，这样判断类是否存在时，更准确 ！
```php
if (class_exists($name, FALSE) === FALSE)
{
    require_once($path.$directory.'/'.$class.'.php');
}
```

### extension_loaded() 函数


### PHP 的 OR 语句

```php
class_exists($class, FALSE) OR require_once($filepath);
if ( ! class_exists($class, FALSE) OR ! method_exists($class, $function))
{
    return $this->_in_progress = FALSE;
}
```

```php
defined('CODE') or define('CODE', 7642);
defined('ERRNO_DB_ERR') or define('ERRNO_DB_ERR', 30001);
```

### ob_get_level() 函数


### 什么预定义变量？

```text
超全局变量 — 超全局变量是在全部作用域中始终可用的内置变量
$GLOBALS — 引用全局作用域中可用的全部变量
$_SERVER — 服务器和执行环境信息
$_GET — HTTP GET 变量
$_POST — HTTP POST 变量
$_FILES — HTTP 文件上传变量
$_REQUEST — HTTP Request 变量
$_SESSION — Session 变量
$_ENV — 环境变量
$_COOKIE — HTTP Cookies
$php_errormsg — 前一个错误信息
$HTTP_RAW_POST_DATA — 原生POST数据
$http_response_header — HTTP 响应头
$argc — 传递给脚本的参数数目
$argv — 传递给脚本的参数数组
```

### PHP的 <<< 概念和使用

```php
class Worker{

    	private function send_mail_template() {
		$msg_mail = <<<BODY
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>评价日报</title>
<style type="text/css">
a {
color: #c75f3e;
}
html>body td{ font-size:11px;}
body,td,th {
font-family: 宋体, Arial;
font-size: 12px;
}
</style>
</head>
<body>
{__table__str__}

</body>
</html>
BODY;

		return $msg_mail;
	}
}
```

### trim() 函数还有第二个参数

### 重要的PHP数组函数

- array_shift()

- array_column()

```php
<?php

$a = array(
  array(
    'id' => 5698,
    'first_name' => 'Bill',
    'last_name' => 'Gates',
  ),
  array(
    'id' => 4767,
    'first_name' => 'Steve',
    'last_name' => 'Jobs',
  ),
  array(
    'id' => 3809,
    'first_name' => 'Mark',
    'last_name' => 'Zuckerberg',
  )
);

print_r( array_column( $a, NULL, 'id' ) );
```

输出如下：
```text
Array
(
    [5698] => Array
        (
            [id] => 5698
            [first_name] => Bill
            [last_name] => Gates
        )

    [4767] => Array
        (
            [id] => 4767
            [first_name] => Steve
            [last_name] => Jobs
        )

    [3809] => Array
        (
            [id] => 3809
            [first_name] => Mark
            [last_name] => Zuckerberg
        )

)
```

### PHP Debug/XDebug 原理
不是怎么配置，而是它是使用什么原理实现的监听调试，比如为什么需要配置ip，端口之类的

### 防止类/文件加载多次

```php
if(!class_exists( $class, false ) && file_exists( $file )){

    require_once $file ;
}

// 如果感觉每次都这样需要写很多代码的话，最好还是写成全局函数形式
function load_class_once($class, $file){

    // 关于 class_exists() 的第二个参数是true or false, 视具体情况而定 
    if(!class_exists( $class, true ) && file_exists( $file )){

        require_once $file ;
    }
}
```

### PHP 的 static 有几种用法

参考：
[Static（静态）关键字](http://php.net/manual/zh/language.oop5.static.php)
[变量范围](http://php.net/manual/zh/language.variables.scope.php#language.variables.scope.static)
[后期静态绑定](http://php.net/manual/zh/language.oop5.late-static-bindings.php)

1. 定义静态变量
2. 后期静态绑定

### PHP 的变量范围

### static 变量是全局变量吗 ？

```php

function aa(){
    
	global $global_count;
	$global_count = 17;
	static $count = 0 ;
	
	echo $count . "\n";
	
	$count ++;
}

aa(); // 0
aa(); // 1
aa(); // 2

echo $count; // 直接报错，PHP Notice:  Undefined variable: count in /home/trArqV/prog.php on line 16
echo $global_count; // 17
// 所以 static 不是全局变量, 只有被 global 关键字声明的变量才是全局变量，不然PHP作者干嘛大费周章的再设计global关键字呢

```

### 讲讲ob_gzhandler() 函数

### 讲讲 gzinflate() 函数

### 讲讲 ob_start() 函数

[What's the use of ob_start() in php?](https://stackoverflow.com/questions/4401949/whats-the-use-of-ob-start-in-php)

[深入理解php的输出缓冲区(output buffer)](https://gywbd.github.io/posts/2015/1/php-output-buffer-in-deep.html)

[Gong Yong的Blog](https://gywbd.github.io/)

### 一种不用 If 的写法

```php
isset($this->_params['product_name']) &&  $info['update_info']['crm_tag'][] = $this->_params['product_name'];
```

### 响应JSON时的代码应该怎么写

```php
protected function _returnjson(){

    header("Content-Type:application/json");
    echo json_encode();
}
```

### ob_start( )中的ob指的是output buffer( 输出缓冲区 )


### array_diff() 函数是干嘛的呀

### array_intersect() 函数是干嘛的呀

### array_combine() 函数


### array_shift() 函数


### 不使用 array_push() 函数实现的方法
```php
$arr = [];
for($i=1;$i<=100;++$i>){

    $arr[] = $i;
}
```


### list() 函数

### mb_ereg_replace()

### array_intersect()


### JSON_UNESCAPED_UNICODE|JSON_NUMERIC_CHECK 什么意思

明明是数组，为什么这样写：JSON_UNESCAPED_UNICODE|JSON_NUMERIC_CHECK

如在PHP中，这样写 ： json_encode($arr,JSON_UNESCAPED_UNICODE|JSON_NUMERIC_CHECK)


### 可以直接在程序中设置 $_SERVER 变量
$_SERVER['CI_ENV']    = empty($argv[1]) ? 'production' : $argv[1];
$_SERVER['PATH_INFO'] = '/nmq_communicate/index/index';

### set_time_limit() 函数

### 判断请求方式
//定义请求数据的方法
define('IS_POST',strtolower($_SERVER["REQUEST_METHOD"]) == 'post');//判断是否是post方法
define('IS_GET',strtolower($_SERVER["REQUEST_METHOD"]) == 'get');//判断是否是get方法
define('IS_AJAX',isset($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest');//判断是否是ajax请求
原文：https://blog.csdn.net/zhanghao143lina/article/details/72628543 


## PHP json_encode 时一定要加的选项
json_encode($default,JSON_UNESCAPED_UNICODE|JSON_NUMERIC_CHECK);

## PHP 如何判断是否为json格式？

## isset() 里面竟然可以写很多个

array_merge() 也是如此，还有那几个类似的可以传很多参数的函数

```php

isset($this->config[$index], $this->config[$index][$item])

```

### || && 这种不用 if 的写法很6，很简洁

```php
$id=-1;

function aa(){
	
	echo "sssss";
	
	return false;
}

$id>0 || aa();
$id>0 && aa();
```

### http_build_query() 函数


### php文件锁问题

### file_get_contents("php://input")

### PHP数组排序
- [参考](https://www.php.net/manual/zh/array.sorting.php)
- sort() - 以升序对数组排序
- rsort() - 以降序对数组排序
- asort() - 根据值，以升序对关联数组进行排序
- ksort() - 根据键，以升序对关联数组进行排序
- arsort() - 根据值，以降序对关联数组进行排序
- krsort() - 根据键，以降序对关联数组进行排序


### 关于PHP-FPM的问题


### 关于 fastcgi_finish_request() 函数


### Integer 整型

- [Integer 整型](https://php.net/manual/zh/language.types.integer.php)


### MYSQL的int类型升级到bigint时，对PHP开发语言影响





