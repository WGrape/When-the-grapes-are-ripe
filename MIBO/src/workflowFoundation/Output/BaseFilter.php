<?php

namespace workflowFoundation\Output;

use Illuminate\Support\Str;
use workflowFoundation\Shared\Constants\Constant;
use workflowFoundation\Shared\Memory\Memory;



class BaseFilter
{
    // 前置操作
    final private function before()
    {
        // 设置当前的状态为 filter
        Memory::set(Constant::WORKFLOW_STATUS, 'filter');
    }

    // 后置操作
    final private function after()
    {
    }


    public function __call($method, $arguments)
    {
        // 方法如果不存在则报错给客户端
        if (!method_exists($this, $method)) {

            return responseJsonOfSystemError([], Str::strcat('当前的 Filter 不存在', $method, '方法'));
        }

        // 调用前置操作
        $this->before();

        // 更新 workflow.output.data
        Memory::update(Constant::WORKFLOW_OUTPUT_DATA, $this->$method(...$arguments));

        // 调用后置操作
        $this->after();

        return 0;
    }

}