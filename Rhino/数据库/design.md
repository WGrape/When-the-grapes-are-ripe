### 需求为可以上传多张图片，怎么设计这个字段？
1. 用 @ 符号将各个图片的路径拼起来
2. 前端 imgList = [] , imgList.push("每一张图片的地址") , 最后 JSON.stringify( imgList ) 即可，也就是说后端存储的是 JSON 数组字符串，如
["sells/5c5163cf6ef1434e6e1b0af1450e9f6e.jpeg","sells/5c5163cc6ef1434e6e1b0aefb426bbcc.jpeg","sells/5c5162f25c26555cbd160f8cc51e3b1c.jpeg"]

