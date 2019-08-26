<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});


/*----------循环 workflow 目录并加载不同模块下的 route.php------------*/
if(!function_exists("myScan")) {

    function myScan($file)
    {

        // 只有当前目录是 workflowOf目录 或者 moduleOf目录 时才会遍历目录
        if (is_dir($file) && (substr(basename($file), 0, 10) === "workflowOf" || substr(basename($file), 0, 8) === "moduleOf")) {

            $file_arr = scandir($file);
            foreach ($file_arr as $key => $value) {

                if ($value !== '.' && $value !== '..') {

                    myScan($file . DIRECTORY_SEPARATOR . $value);
                }
            }

        } else {

            // 只有是 route.php 文件时 , 才会加载
            if (is_file($file) && basename($file) === 'route.php') {

                include_once $file;
            }
        }
    }
}

/*----------循环 workflow 目录并加载不同模块下的 route.php------------*/


// 配置需要扫描的目录
myScan(base_path('src/workflowOfSinger'));
myScan(base_path('src/workflowOfAdmin'));



// 定义的路由都是 API 路由 , 均有 api 前缀
// 如 localhost/api/admin/courseOnline/getAll


