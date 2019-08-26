<?php

namespace workflowOfSinger\moduleOfRelease\Output;

use workflowFoundation\Output\BaseFilter;


// 过滤
class ReleaseFilter extends BaseFilter
{

    // 发行 专辑
    protected function releaseAlbum($outputData)
    {

        $outputData['extra'] = "这是一条额外的业务数据";

        return $outputData;
    }


    // 发行 MV
    protected function releaseMV($outputData)
    {

        return $outputData;
    }

    // 发行 单曲
    protected function releaseSingle($outputData)
    {

        return $outputData;
    }

}