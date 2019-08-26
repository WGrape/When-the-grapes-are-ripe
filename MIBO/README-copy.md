# MIBO

<p align="left">
<img src="https://img.shields.io/badge/language-PHP-red.svg">
<img src="https://img.shields.io/badge/license-MIT-black.svg">
</p>

MIBO：面向4大流程的PHP依赖开发模式（MIBO：The Development Pattern of Dependencies In PHP for 4 Major Processes Oriented）.

## ✎ 摘要( Synopsis )

<img src="https://github.com/Lvsi-China/MIBO/raw/master/extra/images/logo.png">

## ♨ 介绍( Introduction )

废话少说，先介绍本项目的2个根本思想，如下。

#### 1. 面向4大流程
分别是 ``` -> Middleware -> Input -> BUsiness -> Output -> ``` ( MIBO 名称就取于每个单词的首字母 ) 。

#### 2. 依赖开发
大家对依赖注入的理解可能还停留在```Spring```的那个年代，什么意思呢？```就是通过在函数参数列表中声明参数类型，来实现自动创建并自动传参```。其实这已经是很老的模式了，现在需要的是一种更加智能的系统为我们实现更优秀的依赖开发。首先它应该具备以下功能：

> 1. 对**非对象类**的**变量**也支持可定制化的自动注入。
> 2. **不能仅限于**在参数列表中才能实现自动注入。依赖注入要变成一种打破传统思维的思想一样，只要能用依赖注入实现的地方都用依赖注入实现。
> 3. 以**依赖注入**为驱动的编程
> 4. ...

总言之就是，以依赖注入为驱动，开发不同的依赖即可，最后通过注入不同依赖的方式让代码以不同的方式跑起来。

# MIBO 开发模式

说明 ：此代码是基于 ***Laravel* 框架** 的 ，但是这种开发模式重要的地方其实是思想，所以只要知道了思想，用任何语言和框架都能实现 。

## 零 、前言

- 计算机最经典最基础的体系结构就是冯诺依曼体系结构 : 
> 输入设备 + 存储器 + 控制器 + 运算器 + 输出设备 。

这 5 大设备构成了最基本的计算机系统 。

- 有一个经典笑话 :
> 问 : 把大象装冰箱总共分几步 ？
>
> 答 : 三步 , 把冰箱门打开 , 把大象装进去 , 把冰箱门带上 。

- 所以再简化一些 , 我们理解计算机的时候 , 其实也可以像笑话中的那样去理解 , 先不要去考虑那些细节 。因此其实计算机的处理也只分为3步 , 从我们输入至计算机中到计算机显示处理结果 , 分别是 : **输入到计算机内部 + 计算机响应 + 计算机输出** 。

- 因此，如果计算机模型再简单一点就只有 3 个部件 : 
>
> 输入部件 + 处理部件(类似于黑匣子) + 输出设备 。

- 如果将上面的那种思想应用到软件应用层 , 会发现这3个过程和 MVC 非常类似 。但是，用过MVC的人都知道，M层是MVC中最复杂也是最乱的部分。( 因为M层的任务就是要做数据和逻辑处理,所以会很复杂 ) 。
- 正因为 M 层的复杂 , 不同的公司就会在 M 层又细分了很多层 , 同时使用了很多优秀的设计模式，使得开发更简单快速，但是最好的优点我觉得的是易于维护 。

- **因此 MIBO 其实就是 对 Model 层的细分 。不过，MIBO 的思想是 " 在依赖注入的同时 , 注入操作 "** 。


## 一 、MIBO开发模式

### 0：MIBO
MIBO = M( Middleware ) + I( Input ) + B( Business ) + O( Oputput )
- Middleware : 中间件
- Input : 输入
- Business : 业务
- Output : 输出

### 1：Middleware

> 职责：
>
> ① 请求参数预处理
>
> ② 权限控制
>
*( 注释：不代表只有这些作用，因为我目前能想到的作用只有这些 )*

MIBO开发模式中的 Middleware 就是 Laravel 的中间件，简单点说就是请求到达控制器之前需要穿过的 ”层“，**这些 ”层“，即为中间件 。**

这个中间件的作用是非常重要的，因为我们可以在 中间件 中做很多的操作 , **尤其是权限控制 ，在权限控制中间件中，只允许有权限的请求通过 , 没有权限的操作直接返回 , 不会再进行下一步的处理了 , 十分方便 ，因此把权限控制放到中间件中可能是最好的选择 。**

还有请求参数预处理，这个也是非常重要，有了它，我们可以保证请求到达控制器时的参数已经是完全符合预期了的，**我们不再需要转化，只需要验证，也就是说，请求参数预处理操作帮我们做参数转化这个工作** 。

### 1：Input

> 职责：处理我们传入的依赖和操作，保证数据输入到Business时是完全可信的

---

#### 暂时只有 Validation(验证) 依赖

---

目前还不确定都需要有哪些依赖，只有 Validation 依赖是确定的，且对于一般的项目足够了。

我们有时候有这样的应用场景，在业务代码中，我们还要再去判断传来的参数是否是合法可用的，这其实已经造成耦合了，这些不属于业务的代码就不应该放在业务代码中 。

Input 的 Validation 依赖就是专门解决这种问题的，有了它，我们只需要向它传入Validation依赖名和操作名，就能保证Business中的使用到的参数已是完全可信的了。

代码示例如下 :

```
<?php

namespace App\Workflow\SingerView\PublishNewSongModule\Input\Validations;

use App\WorkflowFoundation\Input\Validations\BaseValidation;
use Validator;

// 必须继承 BaseValidation
class PublishNewSongValidation extends BaseValidation
{

    // 验证方法的访问权限必须为 protected
    // 参数名必须为$inputData , 即为前端传来的数据
    protected function buy($inputData)
    {
        // 定义错误消息
        $message = [

            'id.required' => '必须有id',
        ];

        // 返回验证器Validator
        return Validator::make($inputData, [

            'id' => 'bail|required',

        ], $message);
    }

}
```

### 2：Business

> 职责：处理我们传入的依赖和操作，只做真正与业务相关的操作
---

#### 暂时只有 Director(业务负责人) 依赖

---

目前还不确定都需要有哪些依赖，只有 Director 依赖是确定的，且对于一般的项目足够了。

代码示例如下 :

暂时只支持在 Service 的 Before 或 After 中添加 1 个钩子 ，添加多个则会覆盖 ，之所以这样设计，是因为我觉得设置 多个钩子的场景是可以修改为设置1个钩子的 。
钩子执行完毕后，会自己销毁此钩子

## Business

### Service

WorkflowFoundation 提供的有队列，在 service 中可以使用 put_into_queue() 辅助函数等使用队列，队列的实现是使用 Laravel 提供的队列，并且已经完全配置好了，不需要动 laravel 内置的任何 队列配置，只需要使用即可


# MIBO 之 Input 需要的依赖

注释 ： 目前还不确定都需要有哪些依赖，只有 Validation 依赖是确定的，且对于一般的项目足够了。

## 1. Validation依赖


我们有时候有这样的应用场景，在业务代码中，我们还要再去判断传来的参数是否是合法可用的，这其实已经造成耦合了，这些不属于业务的代码就不应该放在业务代码中 。


Input 的 Validation 依赖就是专门解决这种问题的，有了它，我们只需要向它传入Validation依赖名和操作名，就能保证Business中的使用到的参数已是完全可信的了。


代码示例如下 :

##### 在 Controller 中把 Validation 依赖注入到 Input 里

```
<?php

namespace App\Workflow\SingerView\PublishNewSongModule;

class PublishNewSongController extends BaseController
{


    public function publish(Input $input, Business $business, Output $output)
    {

        $input->handle([

            // 注入 Validation 和操作名
            PublishNewSongValidation::class=>'publish'
        ]);
        
    }

}
```

##### 某个 Validation 依赖的具体实现
```
<?php

namespace App\Workflow\SingerView\PublishNewSongModule\Input\Validations;

// 必须继承 BaseValidation
class PublishNewSongValidation extends BaseValidation
{

    // 验证方法的访问权限必须为 protected
    // 参数名必须为$inputData , 即为前端传来的数据
    protected function buy($inputData)
    {
        // 定义错误消息
        $message = [

            'id.required' => '必须有id',
        ];

        // 返回验证器Validator
        return Validator::make($inputData, [

            'id' => 'bail|required',

        ], $message);
    }

}
```
