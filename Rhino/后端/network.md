### tcp挥手过程为什么4次？

### 三次握手四次挥手问题？

### tcp为什么三次握手就够了？
因为3次是能保证数据正确无误传送，保证正常通信的最小次数，如果少于3次则不能保证正常通信，如果多于三次就成了冗余无用的操作。

### 网络协议？

### tcp如何保证有效传输及拥塞控制原理？怎么判断当前网络发生了拥塞？

### https具体流程？

### 计算机网络每层的名字。

### UDP，TCP的区别？

### HTTPS与HTTP的区别？

### 什么是幂等性？什么是HTTP的幂等性？
一个HTTP方法是幂等的，指的是同样的请求被执行一次与连续执行多次的效果是一样的，服务器的状态也是一样的。

- 幂等请求：相同的请求进行多次请求时，服务器的返回状态也是一样的。>
- 非幂等请求：相同的请求进行多次请求时，服务器的返回状态不一样

```GET /pageX HTTP/1.1```是幂等的。连续调用多次，客户端接收到的结果都是一样的：

```
GET /pageX HTTP/1.1   
GET /pageX HTTP/1.1   
GET /pageX HTTP/1.1   
GET /pageX HTTP/1.1
```

```POST /add_row HTTP/1.1```不是幂等的。如果调用多次，就会增加多行记录：

```
POST /add_row HTTP/1.1
POST /add_row HTTP/1.1   -> Adds a 2nd row
POST /add_row HTTP/1.1   -> Adds a 3rd row
```

```DELETE /idX/delete HTTP/1.1```是幂等的，即便是不同请求之间接收到的状态码不一样：

```
DELETE /idX/delete HTTP/1.1   -> Returns 200 if idX exists
DELETE /idX/delete HTTP/1.1   -> Returns 404 as it just got deleted
DELETE /idX/delete HTTP/1.1   -> Returns 404
```

可参考 [MDN-幂等](https://developer.mozilla.org/zh-CN/docs/Glossary/%E5%B9%82%E7%AD%89)

### TCP的首部有固定20个字节，都包含哪些内容？

### 谈谈你对代理( Proxy )的理解

### 百度网盘限速的原理

### POST 提交数据的方式
1. application/x-www-form-urlencoded，
2. multipart/form-data，
3. application/json，
4. text/xml

### XMLHttpRequest 和 POST 的区别 ？


### GET和POST的重要区别？
1. 幂等性
2. RESTful 架构中，GET和POST所定位的不同含义

```
什么是幂等性？幂等性是指一次和多次请求某一个资源应该具有同样的副作用。简单来说意味着对同一URL的多个请求应该返回同样的结果。
```

详见：
[get和post区别？](https://www.zhihu.com/question/28586791)
[听说『99% 的人都理解错了 HTTP 中 GET 与 POST 的区别』？？](https://zhuanlan.zhihu.com/p/25028045)


##### 参考 
- [四种常见的 POST 提交数据方式](https://imququ.com/post/four-ways-to-post-data-in-http.html)


##### TCP 粘包，分包
1. http://www.voidcn.com/article/p-pvkntjrg-beh.html

2. 什么是 TCP 沾包 ？

##### 所以一条 TCP 连接上到底能有多少个 HTTP 连接 ？


