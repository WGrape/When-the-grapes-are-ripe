<?php

namespace workflowFoundation\Business;

use Illuminate\Support\Str;
use workflowFoundation\Shared\Constants\Constant;
use workflowFoundation\Shared\Memory\Memory;

/**
 * 负责人 : 负责调用各个 Service
 *
 * Class BaseDirector
 * @package App\WorkflowFoundation\Business\Directors
 */
class BaseDirector
{
    // 前置操作
    final private function before()
    {
        // 记录当前的 workflow 状态为 director
        Memory::set(Constant::WORKFLOW_STATUS, 'director');
    }

    // 后置操作
    final private function after()
    {

    }


    public function __call($method, $arguments)
    {
        // 方法如果不存在则报错给客户端
        if (!method_exists($this, $method)) {

            return responseJsonOfSystemError([], Str::strcat('当前的 Director 不存在', $method, '方法'));
        }

        // 前置操作
        $this->before();

        // 开始执行
        Memory::update(Constant::WORKFLOW_BUSINESS_DATA, $this->$method(...$arguments));

        // 调用后置操作
        $this->after();

        return 0;
    }
}