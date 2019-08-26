<?php

namespace workflowFoundation\Shared\Services;


use App\Exceptions\ServiceException;
use Closure;
use workflowFoundation\Shared\Hooks\Hook;


class BaseService
{



    /*--start-------------非必须使用 , 只是提供此技术以应对有时候奇葩的需求-----------------*/

    // 在之前勾住 $method 方法 , 添加一个钩子(回调函数) ( 注 : 需要手动调用方法才会执行此钩子 )
    final public function hookOnBefore($method, Closure $callback)
    {
        Hook::set(Hook::generateHookName([static::class, $method, 'before']), $callback);
    }

    // 在之前勾住 $method 方法 , 添加一个钩子(回调函数) , 并且立即执行此 $method 方法
    final public function hookOnBeforeAndRunMethodImmediately($method, array $arguments, Closure $callback)
    {
        Hook::set(Hook::generateHookName([static::class, $method, 'before']), $callback);
        return $this->systemCallMethod($method, $arguments);
    }

    // 在之后勾住 $method 方法 , 添加一个回调函数
    final public function hookOnAfter($method, Closure $callback)
    {
        Hook::set(Hook::generateHookName([static::class, $method, 'after']), $callback);
    }

    // 在之后勾住 $method 方法 , 添加一个回调函数 , 并且立即执行此 $method 方法
    final public function hookOnAfterAndRunMethodImmediately($method, array $arguments, Closure $callback)
    {
        Hook::set(Hook::generateHookName([static::class, $method, 'after']), $callback);
        return $this->systemCallMethod($method, $arguments);
    }

    // 系统调用某个方法( 使用系统调用Service的方法的好处是 : 不但可以执行自己设置的前置/后置操作 , 而且如果设置了钩子那么还能执行钩子 )
    final public function systemCallMethod($method, array $arguments)
    {

        /* -------> 勾住,在业务执行前执行 */
        $rawHookInfo = [static::class, $method, 'before'];
        $hookName = Hook::generateHookName($rawHookInfo);

        // 如果存在钩子且执行此钩子(回调函数)时返回了 false
        if (Hook::has($hookName) && false === with(null, Hook::get($hookName))) {

            // 销毁钩子
            Hook::destroy($hookName);

            // 则手动抛出服务异常
            throw new ServiceException('服务无法为您继续处理...');
        } /* <------- 勾住,在业务执行前执行 */


        // 执行业务(不一定有返回值 , $returnValue可能为null)
        $returnValue = $this->$method(...$arguments);


        /* -------> 勾住,在业务执行后执行 */
        $rawHookInfo[2] = 'after';
        $hookName = Hook::generateHookName($rawHookInfo);

        // 如果存在钩子且执行此钩子(回调函数)时返回了false
        if (Hook::has($hookName) && false === with(null, Hook::get($hookName))) {

            // 销毁钩子
            Hook::destroy($hookName);

            // 则手动抛出服务异常
            throw new ServiceException('服务的结果不符合预期, 被迫中止...');
        } /* <------- 勾住,在业务执行后执行 */

        // 业务执行完成后, 会把返回值返回( 可能为 null )
        return (isset($returnValue) && !is_null($returnValue)) ? $returnValue : null;
    }

    /*--end-------------非必须使用 , 只是提供此技术以应对有时候奇葩的需求-----------------*/


}



