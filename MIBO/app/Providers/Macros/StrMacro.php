<?php

namespace App\Providers\Macros;

use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Str;

// 字符串扩展
class StrMacro extends ServiceProvider
{
    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {

        Str::macro('strcat', function (...$strs) {

            $string = '';
            foreach ($strs as $str) {

                $string .= $str;
            }

            return $string;
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
