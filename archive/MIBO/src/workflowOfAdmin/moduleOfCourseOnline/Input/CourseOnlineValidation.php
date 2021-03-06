<?php

namespace workflowOfAdmin\moduleOfCourseOnline\Input;

use Validator;
use workflowFoundation\Input\BaseValidation;

/**
 * 验证
 *
 * 只做一些字段的比较简单的检查验证 ,
 *
 * 如果验证一个字段还需要连表操作 , 那么肯定不能放在此处作为验证 ,
 * 应首先考虑是否可以使用中间件 或者是 业务的前置钩子
 *
 */
class CourseOnlineValidation extends BaseValidation
{
    /**
      * Filter 的方法
      * ①: 方法访问权限必须为 protected
      * ②: 方法的参数有且只能有 $inputData
      * ③: 返回 Validator(验证器)
      */
    protected function dummyMethod($inputData)
    {
        // 定义验证的错误消息( 验证失败时将会响应到前端 )
        $message = [

            'id.required' => '必须有id',
            'id.size' => 'id必须在1到9999之间',
        ];

        // 返回验证器Validator
        return Validator::make($inputData, [

            // 配置你的验证规则
            'id' => 'bail|required|size:1,9999',

        ], $message);
    }


     protected function index($inputData)
     {
        $message = [

        ];

        return Validator::make($inputData, [

        ], $message);
     }

}

