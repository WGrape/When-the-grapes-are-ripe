<?php


namespace workflowFoundation\Business\DirectorRelied\User;

use workflowFoundation\Shared\Services\BaseService;

// 用户服务
class UserService extends BaseService implements UserServiceImpl
{

    public function getOne($table, $where = [])
    {
        if ($where['id'] === 100) {

            return [

                'name' => "周杰伦",
                'country' => 'China',
            ];
        }
        else if ($where['id'] === 105) {

            return [

                'name' => "陈奕迅",
                'country' => 'China',
            ];
        }

        return [

            'name' => "YoGuSa",
            'country' => 'Japan',
        ];
    }

    public function getMany($table, $where = [])
    {
    }
}