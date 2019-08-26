<?php

namespace workflowFoundation\Input;


use Illuminate\Support\Str;
use workflowFoundation\Shared\Constants\Constant;
use workflowFoundation\Shared\Memory\Memory;


/**
 * 验证基类
 *
 * Class BaseValidation
 * @package App\WorkflowFoundation\Input\Validations
 */
class BaseValidation
{
    // 前置操作
    final private function before()
    {
        // 设置当前的状态为 validation , 并未 inputData 数据成员赋值
        Memory::set(Constant::WORKFLOW_STATUS, 'validation');
    }

    // 后置操作
    final private function after()
    {
    }

    // 开始验证
    protected function startValidate($validator)
    {
        // 未通过验证
        if ($validator->fails()) {

            // 未通过验证 , 则直接返回JSON并提示错误
            return responseJsonOfFailure([], array_first($validator->errors()->all()));
        }

        return 0;
    }

    public function __call($method, $arguments)
    {
        // 方法如果不存在则返回系统错误
        if (!method_exists($this, $method)) {

            return responseJsonOfSystemError([], Str::strcat('当前的 Validation 不存在', $method, '方法'));
        }

        // 前置操作
        $this->before();

        // 开始验证
        $this->startValidate($this->$method(...$arguments));

        // 验证结束并且已经通过验证
        // 调用后置操作
        $this->after();

        return 0;
    }

}


