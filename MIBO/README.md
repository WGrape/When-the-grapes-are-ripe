# MIBO

<p align="left">
<img src="https://img.shields.io/badge/language-PHP-red.svg">
<img src="https://img.shields.io/badge/license-MIT-black.svg">
</p>

MIBO：面向四道流程的PHP依赖开发模式（MIBO：The Development Pattern of Dependencies In PHP for 4 Major Processes Oriented）.

## ✎ 摘要( Synopsis )

<img src="https://github.com/Lvsi-China/MIBO/raw/master/extra/images/logo.png" width="555px" >

## ♨ 介绍( Introduction )

废话少说，先介绍本项目的2个根本思想，如下。

#### 1. 面向四道流程
分别是 ``` -> Middleware -> Input -> Business -> Output -> ``` ( MIBO 名称就取于每个单词的首字母 ) 。

#### 2. 依赖开发
大家对依赖注入的理解可能还停留在```Spring```的那个年代，什么意思呢？```就是通过在函数参数列表中声明参数类型，来实现自动创建并自动传参```。其实这已经是很老的模式了，现在需要的是一种更加智能的系统为我们实现更优秀的依赖开发。首先它应该具备以下功能：<br/>
    (1). 对**非对象类**的**变量**也支持可定制化的自动注入。<br/>
    (2). **不能仅限于**在参数列表中才能实现自动注入。依赖注入要变成一种打破传统思维的思想一样，只要能用依赖注入实现的地方都用依赖注入实现。<br/>
    (3). 以**依赖注入**为驱动的编程<br/>
    (4). ...

总言之就是，以依赖注入为驱动，开发不同的依赖即可，最后通过注入不同依赖的方式让代码以不同的方式跑起来。

有几点注意：

```
1. 此项目之所以是基于 Laravel 搭建的，只是因为我比较喜欢Laravel，所以用Laravel实现了而已。
2. 大家可以根据自己的使用习惯，去使用其他的框架去间接的实现 MIBO ( 改底层代码 ) 。 
3. MIBO 是一种不限于语言的面向四道流程的依赖开发模式，任何语言都能使用。
```

## ★ 解释( Explanation )

### 1. 四道流程

- #### M (Middleware)
    
    中间件是一种旨在多个任务之间起到承上启下作用的技术( 我自己的描述 )。
    
    请求经过路由之后首先要经过第一个流程，即 ```中间件流程``` 。<br>

    中间件流程主要有以下职责：
    ```
    1. 请求参数预处理，如把空字符串转成0等转化操作。
    2. 权限控制，保证请求到达下一流程时是可信的操作。
    3. 采集客户端信息，等其他预处理操作。
    ```
    
    中间件流程和其他的三个流程不太一样，首先中间件流程是针对于控制器而言的。什么意思呢？就是说中间件流程都是注入(配置)到控制器中的，即中间件流程就是控制器的依赖。很明显了，此时流程其实是控制器，中间件只是依赖，只不过我们主要关注的是中间件而已。当不同的控制器需要不同的中间件时，给不同的控制器注入(配置)不同的中间件即可。

    在控制器中注入(配置)中间件流程的方法如下：
    ```
    // 穿过控制器的方法前 , 首先要穿过已配置的中间件中
    function __construct()
    {
        // 此中间件会应用到此控制器的 所有的方法里
        $this->middleware(DummyMiddleware::class);

        // 此中间件只会应用到此控制器除 dummyMethod 之外的所有方法上
        $this->middleware(DummyMiddleware::class)->except('dummyMethod');

        // 此中间件只会应用到此控制器的 dummyMethod 方法上
        $this->middleware(DummyMiddleware::class)->only('dummyMethod');

        // 中间件全部穿过完以后 , 才会执行该控制器的方法
    }
    ```

    由于 ```Laravel``` 提供的有[中间件](https://laravel-china.org/docs/laravel/5.7/middleware/2254)，所以我直接使用的是 Laravel 的中间件，具体的使用可以参见Laravel官网。

- #### I (Input)

    指请求穿过中间件后需要经过第二个流程，即 ```输入流程``` 。

    输入流程主要有以下职责：
    ```
    1. 验证请求参数，如验证字符串是否在规定的长度之内。
    2. 权限控制
    3. 采集客户端信息，等其他预处理操作操作
    ``` 

    在输入流程中注入依赖如下：
    ```
    // 输入流程的处理
    $input->handle([

        // 传入想要让 Input 执行的依赖操作
        // 验证器类 => 验证器的某个方法
        DummyValidation::class => "dummyMethod"
    ]);
    ```

    > 如：一个字段在未设置的时候需要有默认值，在M(Middleware)中实现还是在I(Input)中实现呢？<br/>
    > 答：中间件。因为这样完全保证了之后的每个流程收到的数据都已是加工过的了。

    > 一句话总结在请求参数处理中M和I的区别就是：<br/>
    > ```中间件流程```起到对请求参数做转化修改( 只转化数据和添加默认值 )的功能。<br/>
    > ```输入流程```起到对请求参数做验证(只验证数据，禁止修改数据)的功能。

- #### B (Business)

    在请求穿过```输入流程```后，进入到了最重要的一道流程，即 ```业务流程``` 。

    业务流程**只有**1个职责：执行业务。

    在业务流程中注入依赖如下：
    ```
    // 业务流程的处理
    $business->handle([

        // 传入想要让 Business 执行的依赖操作
        // 服务类 => 服务类的某个方法
        DummyService::class => "dummyMethod"
    ]);
    ```

- #### O (Output)

    请求穿过的最后一道流程，即 ```输出流程``` 。

    输入流程主要有以下职责：
    ```
    1. 数据过滤。 如在获取表数据时，无意获取到了 password 字段，在输出流程中将敏感数据删除掉。
    2. 日志记录等一些其他的善后操作。
    ```

    在输出流程中注入依赖如下：
    ```
    // 输出流程的处理
    $output->handle([

        // 传入想要让 Output 执行的依赖操作
        // 过滤器类 => 过滤器类的某个方法
        DummyFilter::class => "dummyMethod"
    ]);
    ```

### 2. 依赖开发

#### 2.1 在生产线上通过注入依赖的开发

<img src="https://github.com/Lvsi-China/MIBO/raw/master/extra/images/logo-dependencies.png" width="450px" >

```图中的黄色箱子就是 “依赖” ```

所谓的依赖开发就是我们在开发中以依赖为中心，通过构建**多个不同**的依赖，最后**把需要**的依赖放入到生产线中，即可如期运行业务。

##### 下面是一个在生产线上通过注入依赖的开发例子：

```php
class PayController{

    // 普通用户支付
    public function userPay(Input $input, Business $business, Output $output){

        // 输入处理
        $input->handle([

            // 传入想要让 Input 流程执行的依赖操作
            PayValidation::class => "pay", // 注入参数验证：验证支付时需要的请求参数
            UserPermission::class => "isLogin", // 注入权限控制：验证用户权限 : 是否登录
            UserPermission::class => "isPayAble", // 注入权限控制：验证用户权限 : 此用户是否是否能支付
        ]);

        // 业务处理
        $business->handle([

            // 传入想要让 Business 流程执行的依赖操作
            plusDiscountService::class => "userBuy", // 注入服务 ： 加上普通用户购买时的折扣
            plusFreightChargeService::class => "userExpress", // 注入服务 ： 加上普通用户需要的运费
            PayService::class => "pay" // 注入服务：用户支付服务
        ]);

        // 输出处理
        $output->handle([

            // 传入想要让 Output 流程执行的依赖操作
            PayFilter::class => "pay", // 注入过滤器：过滤支付数据
            PayLog::class => "writeVipPayLog" // 注入善后操作：记录VIP用户的购买日志
        ]);
    }

    // VIP用户支付
    public function vipPay(Input $input, Business $business, Output $output){

        // 输入处理
        $input->handle([

            // 传入想要让 Input 流程执行的依赖操作
            PayValidation::class => "pay", // 注入参数验证：验证支付时需要的请求参数
            UserPermission::class => "isLogin", // 注入权限控制：验证用户权限，是否登录
            UserPermission::class => "isPayAble", // 注入权限控制：验证用户权限，此用户是否是否能支付
        ]);

        // 业务处理
        $business->handle([

            // 传入想要让 Business 流程执行的依赖操作
            plusDiscountService::class => "vipBuy", // 注入服务：加上VIP用户购买时的折扣
            plusFreightChargeService::class => "vipExpress", // 注入服务：加上VIP用户需要的运费
            PayService::class => "pay" // 注入服务：用户支付服务
            cashbackService::class=> "cashback" // 注入服务：VIP购买后会有返现活动
        ]);

        // 输出处理
        $output->handle([

            // 传入想要让 Output 流程执行的依赖操作
            PayFilter::class => "pay", // 注入过滤器：过滤支付数据
            PayLog::class => "writeVipPayLog" // 注入善后操作：记录VIP用户的购买日志
        ]);

    }
}
```

相关问题
```
有人会问：类的方法都是有参数的，但是这里就只写了方法名，那么还能被成功执行吗？
答：肯定可以。因为我全部在底层通过反射解决了相关问题。如果你还是不清楚如何做到的，可以继续往下看，我会讲底层的代码。
```

#### 2.2 在参数列表中通过注入变量的依赖开发

##### 传统的依赖注入

```php
// 底层会自动创建 DummyClass 类的一个对象并传入
public function method( DummyClass $obj ){


}
```

##### 增强的依赖注入

```php
// 底层在通过反射获取到变量名之后，会自动获取 businessData 数据 
public function method( $businessData ){


}
```

#### 2.3 四道流程中各个流程的可用依赖列表

|  | Middleware流程 | Input流程 | Business流程 | Output流程 |
| --- | --- | --- | --- | --- |
| 1 | Convert | Validation | Service | Filter |
| 2 | Auth |  |  | Journal |
| 3 |  |  |  |  |
| 4 |  |  |  |  |
| 5 |  |  |  |  |



### 3. 数据中心( DataCenter )

#### 3.1 介绍

**不废话**：数据中心就是优雅的使用类来管理整个项目的所有数据。

**优雅在**：四道流程之间的数据传递由数据中心自动处理。

**数据流**：requestDara -> inputData -> businessData -> outputData ```==对应着四道流程==>``` Middleware -> Input -> Business -> Output

#### 3.2 传统设计与数据中心的对比

在传统的应用设计中，不同的业务/功能/模块/函数之间的数据传递都是通过```return data;```。


##### 传统设计
```php
function input(){

    return $inputData; // 返回输入的数据
}

function service($inputData){

    return $businessData;
}

service( input() );
```

这种设计有什么问题呢？很显然，只能满足一次需求！如果之后又需要数据的话，还需要再次调用```input()```，虽然在同一个文件中，可以定义一个临时变量来解决重复使用问题。但在不同的文件中时，就显得手足无措了。


##### 数据中心
```php

service( $inputData ); // 文件1

service2( $inputData ); // 文件2

```

也就是说，有了数据中心，即使是在不同的文件中，你只需要标明 $inputData 参数，数据中心便会自动传递参数给你了。


#### 3.3 数据流

##### Middleware流程
```
// Middleware 流程中的 Auth 依赖
class DummyAuth extends MIBO_Middleware_Auth{

    // 参数名必须为 $requestData
    protected function handle($requestData){

        // 可以直接使用 $requestData
    }
}
```

##### Input流程
```
// Input 流程中的 Validation 依赖
class DummyValidation extends MIBO_Input_Validation{

    // 参数名必须为 $inputData
    protected function dummyMethod($requestData, $inputData){

        // 可以直接使用 $requestData，$inputData
    }

}
```

##### Business流程
```
// Business 流程中的 Service 依赖
class DummyService extends MIBO_Business_Service{

    // 参数名必须为 $businessData
    protected function dummyMethod($requestData, $inputData, $businessData){

        // 可以直接使用 $requestData，$inputData，$businessData
    }

}
```

