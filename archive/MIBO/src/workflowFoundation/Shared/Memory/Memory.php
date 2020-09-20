<?php

namespace workflowFoundation\Shared\Memory;

use Illuminate\Support\Str;
use workflowFoundation\Shared\Constants\Constant;


/**
 * 内存 , 负责存储数据( data = workflow + pool )
 * workflow : 工作流数据(Input数据 + Business数据 + Output数据)
 * pool : 资源池
 * Class Memory
 * @package App\WorkflowFoundation\Shared\Memory
 */
class Memory
{

    // 存储的数据
    protected static $data = null;

    // 是否存在 key ( 如果不存在可以设置数据 )
    public static function has($key, $value = null)
    {
        // 如果存在 key , 则直接返回 true
        if (array_has(self::$data, $key)) {

            return true;
        }

        // 不存在 key , 且也没有传入 $value , 则直接返回 false
        if (is_null($value)) {

            return false;
        }

        // 不存在 key , 但是传入了 $value , 则设置 key:value
        self::set($key, $value);

        return true;
    }

    // 设置数据
    public static function set($key, $value = null)
    {
        if (is_array($key)) {

            foreach ($key as $key1 => $value1) {

                array_set(self::$data, $key1, $value1);
            }
            return;
        }

        if (is_string($key)) {

            array_set(self::$data, $key, $value);
            return;
        }

        return;
    }

    /**
     * 更新数据
     * @param $key null
     * @param $value null
     */
    public static function update($key, $value = null)
    {
        self::set($key, $value);
    }

    /**
     * 获取数据( 返回全部的数据或者返回某个键的值 )
     * @param $key null|string
     * @param null $where 可选,值只能是 workflow 或 pool
     * @return mixed
     */
    public static function get($key = null, $where = null)
    {
        // 返回全部的数据
        if (is_null($key)) {

            return self::$data;
        }

        // 猜测 $key 的值
        $key = ($where === 'pool') ? Str::strcat($where, '.', $key) : $key;

        // 根据$key的值知道了get的目的是获取 workflow 中某一个状态的数据
        if (in_array($key, Constant::WORKFLOW_THREE_STATES_DATA)) {

            // 数据此时肯定已经存在(必须遵守规范 : 只能在可以调用的时候调用 , 那么数据此时肯定已经存在)
            return array_get(self::$data, $key, null);
        }


        // 根据$key的值知道了get的目的是获取 workflow.response 中的某项数据
        if (in_array($key, Constant::WORKFLOW_RESPONSE)) {

            return array_get(self::$data, $key, null);
        }


        // 根据$key的值知道了get的目的是获取 poll 中的资源
        // 如果有则返回此资源 , 如果没有此资源则创建并放到 pool 中
        if (is_null($resource = array_get(self::$data, $key, null))) {

            // 创建新的资源到pool中
            $resource = self::createNewResourceIntoPool($key);
        }

        // 资源此时肯定存在
        return $resource;
    }

    /**
     * 创建新的资源到Pool(资源池)中并返回
     * @param $key string
     */
    protected static function createNewResourceIntoPool($key)
    {
        $sections = explode('.', $key);

        // if isset($sections[0]) && isset($sections[1])
        if (count($sections) === 2 && $sections[0] === 'pool') {

            // 判断此类是否存在
            $class = $sections[1];
            if (!class_exists($class)) {

                return responseJsonOfSystemError([], Str::strcat('Memory试图创建', $class, '资源到Pool中 , 但是此类不存在'));
            }

            // 创建新的资源并放到 pool 中
            $resource = new $class();
            self::set($key, $resource);
            return $resource;
        }

        return responseJsonOfSystemError([], Str::strcat('Memory暂不支持此格式的键 : ', $key));
    }

    /**
     * 返回数据并将此数据删除
     * @param $key
     * @return mixed
     */
    public static function pull($key)
    {
        $value = self::get($key);
        self::destroy($key);
        return $value;
    }

    /**
     * 移动数据(将数据从一个地方移动到另一个地方)
     * 参数可以为 : move(['from'=>'to']) 或者 move($from, $to)
     * @param $from array | string
     * @param $to
     */
    public static function move($from, $to = null)
    {

        // 只有一个 from 参数 , 并且 from 参数是数组
        if (is_array($from)) {

            foreach ($from as $from1 => $to1) {

                self::set($to1, self::pull($from1));
            }
            return;
        }

        // from参数 和 to参数 都有 , 并且都是字符串
        if (is_string($from) && is_string($to)) {

            self::set($to, self::pull($from));
            return;
        }

        return;
    }

    /**
     * 复制数据 , 将from处的数据copy到to处的数据中
     * @param $from
     * @param null $to
     */
    public static function copy($from, $to = null)
    {

        // 只有一个 from 参数 , 并且 from 参数是数组
        if (is_array($from)) {

            foreach ($from as $from1 => $to1) {

                self::set($to1, self::get($from1));
            }
            return;
        }

        // from参数 和 to参数 都有 , 并且都是字符串
        if (is_string($from) && is_string($to)) {

            self::set($to, self::get($from));
            return;
        }

        return;
    }

    /**
     * 销毁数据
     * @param $key true | string
     */
    public static function destroy($key)
    {
        // 销毁掉Memory中所有的数据
        if ($key === true) {

            unset(self::$data);
            return;
        }

        // 删除Memory中的某个键
        if (is_string($key)) {

            array_forget(self::$data, $key);
            return;
        }

        return;
    }


}