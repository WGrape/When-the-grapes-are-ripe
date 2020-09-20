<?php

namespace App\Providers\Macros;

use Illuminate\Support\Arr;
use Illuminate\Support\ServiceProvider;


// 数组扩展
class ArrMacro extends ServiceProvider
{
    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {

        Arr::macro('getValueByKey', function ($arr, $key) {

            if (is_array($arr) && isset($arr[$key])) {

                return $arr[$key];
            }

            return null;
        });
    }

    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        //
    }
}
