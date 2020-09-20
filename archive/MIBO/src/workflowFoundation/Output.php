<?php

namespace workflowFoundation;

use workflowFoundation\Shared\Constants\Constant;
use workflowFoundation\Shared\Memory\Memory;
use workflowFoundation\Shared\Reflection\Reflection;


/**
 * workflow 中的 Output
 *
 * Class Output
 * @package App\WorkflowFoundation
 */
class Output
{

    // 前置操作
    final private function before()
    {
        // 记录当前的 workflow 状态为 output
        Memory::set([

            Constant::WORKFLOW_STATUS => 'output',
        ]);

        // 把 workflow.business.data 中的数据复制到 workflow.output.data 中 ,
        Memory::copy(Constant::WORKFLOW_BUSINESS_DATA, Constant::WORKFLOW_OUTPUT_DATA);
    }

    // 后置操作
    final private function after()
    {

    }

    // 处理
    public function handle(array $dependences)
    {
        // 前置操作
        $this->before();

        // 循环执行传来的依赖数组中的操作( [类名 => 方法名] )
        foreach ($dependences as $dependence => $method) {

            // 实参数组 ( 调用类的方法时需要传递的参数 )
            $actualParameterArr = Reflection::forMethodCreateActualParameterArr($dependence, $method);

            // 执行依赖中的方法
            (Memory::get($dependence, 'pool'))->$method(...$actualParameterArr);
        }

        // 后置操作
        $this->after();

        // 成功响应
        return responseJsonOfSuccess(Memory::get(Constant::WORKFLOW_OUTPUT_DATA), '成功');
    }


}