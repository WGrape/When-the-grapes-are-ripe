<?php



// 辅助函数 : 队列操作

if (!function_exists('putIntoQueue')) {

    // 推送一个新任务到队列中( 也就是在对应的表中新增一条记录,或者是修改某条已存在的记录 )
    function pushJobIntoQueue($job, $queue)
    {

        (new $queue)->push($job) ;
    }
}

