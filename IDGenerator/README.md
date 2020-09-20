# IDGenerator
分布式ID生成算法

## UUID
UUID(Universally Unique Identifier)通用唯一ID识别码标准，指在一台机器上生成的数字，它保证对在同一时空中的所有机器都是唯一的（去中心化的方式）。一般使用以太网卡地址(Mac地址)、纳秒级时间、芯片ID码、机器ID随机数等许多可能硬件和软件级别标识唯一的数字。常用的有微软对UUID实现名为GUID的标准，存储为128位的二进制整数，格式为32位16进制数字组成的字符串，如{21EC2020-3AEA-1069-A2DD-08002B30309D}(8-4-4-4-12)

## 参考
twitter snowflake [雪花算法](https://github.com/twitter/snowflake)，查看 [Twitter开发者手册](https://developer.twitter.com/en/docs/basics/twitter-ids.html)


