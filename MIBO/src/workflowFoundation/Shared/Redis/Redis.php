<?php

namespace workflowFoundation\Shared\Redis;

class Redis
{

    // Redis 实例
    private static $instance = null;

    // 返回 Redis 实例
    public static function instance()
    {

        self::$instance = (!is_null(self::$instance)) ?: new \Predis\Client(config('database.redis.default'));

        return self::$instance;
    }

}