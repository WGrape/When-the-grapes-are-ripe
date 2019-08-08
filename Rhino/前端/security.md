### XSS 原理及防范？

- 原理
1. 跨站脚本（英语：Cross-site scripting，为防止与CSS重名，故简称为：XSS）是一种网站应用程序的安全漏洞攻击，是代码注入的一种。它允许恶意用户将代码注入到网页上，其他用户在观看网页时就会受到影响。这类攻击通常包含了HTML以及用户端脚本语言。

2. XSS攻击者通过畸形的输入，将恶意的js代码插入到了页面中。当其他用户浏览该网页时，恶意的js代码会被执行，从而达到攻击的目的。

3. XSS攻击通常指的是通过利用网页开发时留下的漏洞，通过巧妙的方法注入恶意指令代码到网页，使用户加载并执行攻击者恶意制造的网页程序。这些恶意网页程序通常是JavaScript，但实际上也可以包括Java，VBScript，ActiveX，Flash或者甚至是普通的HTML。攻击成功后，攻击者可能得到更高的权限（如执行一些操作）、私密网页内容、会话和cookie等各种内容。

4. XSS攻击发生的根本原因是对用户输入的信任。(要永远记住：永远不要相信用户输入的数据)

- 检测方法

```
><script>alert(document.cookie)</script>
='><script>alert(document.cookie)</script>
"><script>alert(document.cookie)</script>
<script>alert(document.cookie)</script>
<script>alert (vulnerable)</script>
%3Cscript%3Ealert('XSS')%3C/script%3E
<script>alert('XSS')</script>
<img src="javascript:alert('XSS')">
<img src="http://888.888.com/999.png" onerror="alert('XSS')">
<div style="height:expression(alert('XSS'),1)"></div>（这个仅于IE7(含)之前有效）
```

- 防范
1. 可以选择专业的防范工具：[XSS](https://jsxss.com)，Github仓库](https://github.com/leizongmin/js-xss)
2. 记住一件事情：凡是需要用户输入，或者用户可以输入的地方，我们都不要相信用户的输入！都要检测是否是合法的数据，这样才能完全杜绝 XSS 攻击 ！

### CSRF 原理及防范？
- 原理
CSRF可以在受害者毫不知情的情况下以受害者名义发送请求。其原理是借助受害者的cookie来骗取服务器的信任。

比如，受害者T登录了某个银行网站，sessionId等信息就会保存在浏览器中。这时候，用户T又打开了CSRF攻击网站，这个网站通过表单自动提交来向银行网站发起一次转账请求，这样，受害者T的银行账户的钱可能就被转走了。

这个过程成功的关键点在于：用户登录了银行网站，并且session还未过期的时候，打开了CSRF攻击网站。

- 防范
1. 检查HTTP Referer字段
在HTTP的请求头中，有一个Referer字段，用于表示请求来源于哪个地址。上面提到的银行网站，可以在请求到来时，检查Referer字段，如果请求来源地址不在白名单内，就不予回应。

这种方法简单易行，但是也有一定的局限性，比如完全依赖于浏览器发送正确的Referer字段，况且Referer也是很可能被攻击者篡改的。

2. 添加校验TOKEN
其原理是服务器在响应请求时，生成一个csrf-token传递到前台，当前台发起请求时，需要带着这个csrf-token以便于服务器端进行校验。这样一来，由于csrf攻击网站无法获取到这个token，所以也无法通过服务器端的校验。

当前台发起请求时，csrf-token可以通过url参数，或者post的请求体来携带，但是最安全的方式，还是```将csrf-token添加到自定义HTTP请求头中（比如X-CSRF-TOKEN）``` 。

3. CSRF 攻击之所以能够成功，是因为黑客可以完全伪造用户的请求，该请求中所有的用户验证信息都是存在于cookie中，因此黑客可以在不知道这些验证信息的情况下直接利用用户自己的 cookie 来通过安全验证。要抵御CSRF，关键在于在请求中放入黑客所不能伪造的信息，并且该信息不存在于 cookie 之中。可以在 HTTP 请求中以参数的形式加入一个随机产生的 token，并在服务器端建立一个拦截器来验证这个 token，如果请求中没有 token 或者 token 内容不正确，则认为可能是 CSRF 攻击而拒绝该请求。
