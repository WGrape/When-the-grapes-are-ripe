<?php

namespace workflowOfSinger\common\Shared;

use workflowFoundation\Shared\Services\BaseService;

// Service
class TestService extends BaseService
{
    /**
      * Service 的方法
      * ①: 方法访问权限必须为 public
      * ②: 做真正的业务逻辑操作
      */
    public function dummyMethod()
    {

        // 为极大的保证服务的可重用性 ,
        // 服务中的入口验证判断等一定要使用服务的前置钩子完成 , 一定不能写在服务的内部
        // 否则服务的可重用性将会降低

        // 运行到这里 , 就说明各种请求数据已经是完全可信的了 , 只需要做业务处理即可

        /**
         *
         * .........做很多的操作
         *
         */

        return ;
    }




}