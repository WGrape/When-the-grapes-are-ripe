# RDTest

开发人员，如何做好自测？

## 前言
对RD而言，规范的项目流程中除了开发外，还有更为重要的自测环节。这种不同于平常的开发流程称为测试驱动开发（Test-Driven Development），也简称为TDD。


## 自测方式

### 1. 单元测试
通过集成在项目中的单元测试框架，实现对程序中的最小单元进行测试，一般指函数、方法等。

### 2. 接口测试

#### 1) Postman
和众多接口测试平台不一样的是，Postman提供强大的接口测试功能外，还提供了```Pre-request Script```功能，实现了通过JS脚本动态测试接口的需求

#### 2) Xdebug
通过Xdebug调试工具跟踪代码，及时发现逻辑问题，减少bug
### 3. 自动化测试

#### 1) Postman Tests 
Postman接口测试工具提供了编写自动化Script测试接口的```Tests```工具，简单方便的实现组织批量测试。使用详见[文档](https://learning.postman.com/docs/postman/scripts/test-scripts/)

#### 2) PHPUnit / JUnit等测试框架
通过测试框架，对整个业务、单个逻辑等进行多方位全覆盖的集成测试

#### 3) 基于数据的自动化测试

