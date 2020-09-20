<?php

namespace workflowOfSinger\moduleOfRelease\Input;

use Validator;
use workflowFoundation\Input\BaseValidation;


// 验证
class ReleaseValidation extends BaseValidation
{

    // 验证方法的访问权限必须为 protected
    // 参数名必须为 $inputData
    protected function releaseAlbum($inputData)
    {
        // 定义错误消息
        $message = [

            'id.required' => '必须有id',
            'id.between' => 'id必须在1到9999之间',

            'albumName.required' => '专辑名不能为空',
            'albumName.string' => '专辑名必须为字符串',
        ];

        // 返回验证器Validator
        return Validator::make($inputData, [

            // 配置你的验证规则
            'id' => 'bail|required|between:1,9999',
            'albumName' => 'bail|required|string'

        ], $message);
    }

}

