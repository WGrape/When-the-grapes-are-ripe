<?php


namespace workflowOfSinger\moduleOfRelease\Business;


use App\Exceptions\ServiceException;
use workflowFoundation\Business\BaseDirector;
use workflowFoundation\Business\DirectorRelied\User\UserService;
use workflowOfSinger\moduleOfRelease\Shared\ReleaseService;


// 业务负责人
class ReleaseDirector extends BaseDirector
{

    // 发布新歌曲
    // 方法必须为 protected , 参数必须只能有 $inputData 和 不同的 Service
    // 参数 $inputData 表示输入的数据
    // Service 表示依赖的服务
    protected function releaseAlbum($inputData, ReleaseService $releaseService, UserService $userService)
    {
        // 定义业务数据
        $business = [];

        try {

            // 从 UserService 中获取此用户的信息
            $user = $userService->getOne('users', ['id' => $inputData['id']]);

            // 在 ReleaseService 服务的 releaseAlbum 方法体前(一定注意是在方法体内部的最前面)挂上一个钩子(回调函数) , 并且会立即执行 releaseAlbum 方法
            $res = $releaseService->hookOnBeforeAndRunMethodImmediately('releaseAlbum', [$inputData['albumName']], function () use ($user, $inputData) {

                // 在 ReleaseService 服务执行 releaseAlbum 方法前 , 先执行此钩子(回调函数)
                if (strtolower($user['country']) === 'japan') {

                    // 抛出业务异常
                    throw new ServiceException("日本禁止发行");
                } else if (strpos(strtolower($inputData['albumName']), 'sb') !== false) {

                    // 抛出业务异常
                    throw new ServiceException("专辑名中不能有sb");
                }

                // 返回 true 则表示 ReleaseService 服务的 releaseAlbum 方法可以开始进行
                // ReleaseService 的 releaseAlbum 方法才真正开始运行
                return true;
            });

        } catch (ServiceException $e) {

            // 响应失败
            return responseJsonOfFailure([], $e->getMessage(), true);
        }

        // 完成业务数据的存放
        $business['res'] = $res;

        // 返回业务数据
        return $business;
    }

}