### linux下后台执行 test.php 将结果输出到test.log
php test.php & >test.log

### linux 压缩 解压缩命令
tar -cvf jpg.tar *.jpg
tar -xvf jpg.tar

### 你能很快在一台新的 Linux 电脑上，找到 Nginx 和 Apache 和 MySQL 和 PHP 的安装目录和配置文件的位置 吗？

### 找到 PHP 配置文件，你有几种方法？

1. php --ini

2. 执行 phpinfo() , 查找 Loaded... 即可

### 如何安全的使用 rm 语句 ？
答 ： 使用 -i ，这样的话，不会立即删除文件，会给你提示，问你是否确定删除某个文件，这样的话，就会很安全了。

sudo rm -f ./文件名 (不推荐)
sudo rm -i ./文件名 ( 推荐 )

sudo rm -rf ./目录名 (不推荐)
sudo rm -ri ./目录名 ( 推荐 )

### 讲讲 rsync 命令


### 硬链接和软链接的区别 ？

[参考1](https://blog.csdn.net/gao_zhennan/article/details/79127232)

[理解 Linux 的硬链接与软链接](https://www.ibm.com/developerworks/cn/linux/l-cn-hardandsymb-links/index.html)

### rsync 命令


### nslookup 命令


### su ，su - ，sudo区别

- [深入理解 sudo 与 su 之间的区别](https://linux.cn/article-8404-1.html)
