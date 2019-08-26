<?php

namespace App\Console\Commands\Modules;

use Illuminate\Console\Command;


class DeleteOutput extends Command
{
    /**
     * 控制台命令 signature 的名称。
     *
     * @var string
     */
    protected $signature = 'qk:deleteOutput {moduleName}';

    /**
     * 控制台命令说明。
     *
     * @var string
     */
    protected $description = '删除 Output';

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
        $namespace = "{$moduleBeforeSection}/moduleOf" . $moduleAfterSection . '/Output' ;


        // 需要删除的目录
        $dir = base_path($namespace);

        // 需要删除的文件
        $file = $dir . '/' . $moduleAfterSection."Filter.php"; // 删除 Filter
        if(file_exists($file)){

            unlink($file);
        }

        $this->info("Output 删除成功");
    }


}
