<?php

namespace workflowFoundation;
use workflowFoundation\Shared\Constants\Constant;
use workflowFoundation\Shared\Memory\Memory;
use workflowFoundation\Shared\Reflection\Reflection;


/**
 * workflow 中的 Input
 *
 * Class Input
 * @package App\WorkflowFoundation
 */
class Input
{

    // 前置操作
    final private function before()
    {
        Memory::set([

            // 记录当前的 workflow 状态为 input
            Constant::WORKFLOW_STATUS => 'input',

            // 存储当前的 workflow 的数据
            Constant::WORKFLOW_INPUT_DATA => request()->all()
            // request()->all() 会获取当前请求所有的参数 ,
            // 包括 get参数 和 post参数 ,
            // 但是 post 请求的参数会覆盖 get 请求的参数

        ]);
    }

    // 后置操作
    final private function after()
    {

    }

    // 处理
    public function handle(array $dependencies)
    {
        // 前置操作
        $this->before();

        // 循环执行传来的依赖数组中的操作( [类名 => 方法名] )
        foreach ($dependencies as $dependence => $method) {

            // 实参数组 ( 调用依赖的方法时需要传递的参数 )
            $actualParameterArr = Reflection::forMethodCreateActualParameterArr($dependence, $method);

            // 执行依赖中的方法
            (Memory::get($dependence, 'pool'))->$method(...$actualParameterArr);
        }

        // 后置操作
        $this->after();

        return 0;
    }

}