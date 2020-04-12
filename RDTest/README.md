# RDTest

开发人员，如何做好自测？

## 前言
对RD而言，规范的项目流程中除了开发外，还有更为重要的自测环节。这种不同于平常的开发流程称为测试驱动开发（Test-Driven Development），也简称为TDD。


## 自测方式

### 1. 单元测试
通过集成在项目中的单元测试框架，实现对程序中的最小单元进行测试，一般指函数、方法等。

### 2. 接口测试

#### 1) Postman
和众多接口测试平台不一样的是，Postman提供强大的接口测试功能外，还提供了```Pre-request Script```功能，实现了动态测试接口的需求

### 3. 自动化测试

#### 1) Postman Tests 
Postman接口测试工具提供了编写自动化Script测试接口的```Tests```工具，以通过更加完整的测试用例去提高测试覆盖率，减少bug。使用详见[文档](https://learning.postman.com/docs/postman/scripts/test-scripts/)


