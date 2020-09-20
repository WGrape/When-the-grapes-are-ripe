<?php
use \Illuminate\Support\Facades\Route ;

// 配置路由 ( 非法的请求不能请求过来 )
// ① : 因为这些路由都是 API 路由 ，所以我们配置的路由都会被自动添加上 'api' 前缀
// ② : 因为配置了 throttle中间件 , 所以在1分钟之内 , 所有的 API 只能请求60次

$class = workflowOfAdmin\moduleOfCourseOnline\CourseOnlineController::class;

Route::get("/courseOnline/index", $class . "@index");

