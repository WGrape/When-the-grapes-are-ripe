<?php


namespace workflowOfSinger\Common\Middleware;

use Closure;
use Illuminate\Http\Request;

class OnlySinger
{

    // 方法名必须是 handle
    // Laravel 会自动调用此方法
    // 试图穿入此中间件
    public function handle(Request $request, Closure $next)
    {
        /**
         * 判断是否可以通过此中间件
         *
         * 如 : 假设只有歌手可以通过此中间件 (id 在 100 - 1000 之间为歌手)
         */
        if (!$request->has('id') || ($request->id) < 100) {

            return responseJsonOfFailure([],'只有歌手才能发布,(歌手id为100-1000之间)');
        }

        // 可以穿入此中间件

        // 请求将继续被发往到下一个中间件( 如果不再有要中间件 , 那么请求将会被发往到某个控制器的某个方法里 )
        return $next($request);
    }

}