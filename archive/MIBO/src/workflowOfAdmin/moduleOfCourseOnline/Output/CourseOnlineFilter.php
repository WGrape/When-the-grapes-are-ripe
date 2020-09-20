<?php

namespace workflowOfAdmin\moduleOfCourseOnline\Output;

use workflowFoundation\Output\BaseFilter;


// Filter
class CourseOnlineFilter extends BaseFilter
{


    /**
      * Filter 的方法
      * ①: 方法访问权限必须为 protected
      * ②: 方法的参数只能是 $outputData
      * ③: 返回 $outputData
      */
    protected function dummyMethod($outputData)
    {
        $outputData['extra'] = "这是一条额外的数据";

        // 数据过滤 ...

        return $outputData;
    }


     protected function index($outputData)
     {

        return $outputData;
     }


}