<?php


namespace workflowFoundation\Shared\Hooks;


// 钩子管理器( 此时的 Hook 是名词 )
class Hook
{

    // 当前的 hooks
    private static $hooks = [];

    /**
     * 生成 Hook Name
     * @param array $rawHookInfo 原生的 hook 信息
     * @return string
     */
    public static function generateHookName(array $rawHookInfo)
    {

        return implode('.', $rawHookInfo);
    }

    // 存储 Hook
    public static function set($hookName, $callback)
    {
        array_set(self::$hooks, $hookName, $callback);
    }

    // 获取 Hook
    public static function get($hookName)
    {
        return array_get(self::$hooks, $hookName, null);
    }

    // Hook 是否存在
    public static function has($hookName)
    {
        return array_has(self::$hooks, $hookName);
    }

    // 销毁掉
    public static function destroy($hookName = null)
    {
        if (is_null($hookName)) {

            self::$hooks = null;
            unset(self::$hooks);
            return;
        }

        array_forget(self::$hooks, $hookName);
    }


}