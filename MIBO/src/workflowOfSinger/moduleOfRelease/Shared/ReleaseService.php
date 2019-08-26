<?php

namespace workflowOfSinger\moduleOfRelease\Shared;

use workflowFoundation\Shared\Services\BaseService;


// 发行服务
class ReleaseService extends BaseService
{


    // 发现专辑服务
    public function releaseAlbum($albumName)
    {

        // 为极大的保证服务的可重用性 ,
        // 服务中的入口验证判断等一定要使用服务的前置钩子完成 , 一定不能写在服务的内部
        // 否则服务的可重用性将会降低

        // 运行到这里 , 就说明已经是完全可信的了

        /**
         *
         * .........做很多的操作
         *
         */

        return "已进入专辑发行通道，审核通过后才能上架。" ;
    }




}