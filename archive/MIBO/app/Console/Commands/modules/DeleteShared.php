<?php

namespace App\Console\Commands\Modules;

use Illuminate\Console\Command;


class DeleteShared extends Command
{
    /**
     * 控制台命令 signature 的名称。
     *
     * @var string
     */
    protected $signature = 'qk:deleteShared {moduleName}';

    /**
     * 控制台命令说明。
     *
     * @var string
     */
    protected $description = '删除 Shared';

    /**
     * 创建一个新的命令实例。
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * 执行控制台命令。
     *
     * @
     */
    public function handle()
    {
        // moduleName 输入的时候 : workflowOfSinger/release
        $moduleName = $this->argument('moduleName');

        $arr = explode('/', $moduleName);
        $moduleBeforeSection = "workflowOf" . ucwords($arr[0]);
        $moduleAfterSection = ucwords($arr[1]);

        // 需要创建的类的命名空间
        $namespace = "{$moduleBeforeSection}/moduleOf" . $moduleAfterSection . '/Shared' ;


        // 需要删除的目录
        $dir = base_path($namespace);


        /*----------------删除Service------------------*/
        // 需要删除的文件
        $file = $dir . '/' . $moduleAfterSection."Service.php";
        if(file_exists($file)){

            unlink($file);
        }
        $this->info("Shared-Service 删除成功");
        /*----------------删除Service------------------*/


        /*----------------删除 IndexService------------------*/
        // 需要删除的文件
        $file = $dir . '/' . $moduleAfterSection."IndexService.php";
        if(file_exists($file)){

            unlink($file);
        }
        $this->info("Shared-IndexService 删除成功");
        /*----------------删除 IndexService------------------*/


        /*----------------删除Model------------------*/
        // 需要创建的文件
        $file = $dir . '/' . $moduleAfterSection."Model.php";
        if(file_exists($file)){

            unlink($file);
        }
        $this->info("Shared-Model 删除成功");
        /*----------------删除Model------------------*/


        $this->info("Shared 删除成功");
    }


}
