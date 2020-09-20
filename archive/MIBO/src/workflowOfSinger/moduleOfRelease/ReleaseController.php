<?php

namespace workflowOfSinger\moduleOfRelease;

use workflowFoundation\BaseController;
use workflowFoundation\Business;
use workflowFoundation\Input;
use workflowFoundation\Output;
use workflowOfSinger\Common\Middleware\OnlySinger;
use workflowOfSinger\moduleOfRelease\Business\ReleaseDirector;
use workflowOfSinger\moduleOfRelease\Input\ReleaseValidation;
use workflowOfSinger\moduleOfRelease\Output\ReleaseFilter;


// 发行
class ReleaseController extends BaseController
{


    // 首先执行
    // 穿过控制器的方法前 , 首先要穿过已配置的中间件中
    function __construct()
    {
        // 此中间件会应用到此控制器的 所有的方法里
        $this->middleware(OnlySinger::class);

        // 此中间件只会应用到此控制器除 releaseAlbum 之外的所有方法上
        $this->middleware(OnlySinger::class)->except('releaseAlbum');

        // 此中间件只会应用到此控制器的 releaseAlbum 方法上
        $this->middleware(OnlySinger::class)->only('releaseAlbum');

        // 中间件全部穿过完以后 , 才会执行以下控制器的方法
    }



    // 发行专辑
    // 已穿过此方法配置的所有的中间件
    public function releaseAlbum(Input $input, Business $business, Output $output)
    {

        // 输入处理
        $input->handle([

            // 传入想要让 Input 执行的依赖操作
            ReleaseValidation::class => "releaseAlbum" // 验证请求参数
        ]);

        // 业务处理
        $business->handle([

            // 传入想要让 Business 执行的依赖操作
            ReleaseDirector::class => "releaseAlbum" // 业务真正开始
        ]);

        // 输出处理
        $output->handle([

            // 传入想要让 Output 执行的依赖操作
            ReleaseFilter::class => "releaseAlbum" // 过滤业务数据
        ]);

    }


}