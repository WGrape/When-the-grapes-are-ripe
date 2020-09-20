<?php

namespace App\Console\Commands\Modules;

use Illuminate\Console\Command;


class MakeShared extends Command
{
    /**
     * 控制台命令 signature 的名称。
     *
     * @var string
     */
    protected $signature = 'qk:makeShared {moduleName}';

    /**
     * 控制台命令说明。
     *
     * @var string
     */
    protected $description = '创建 Shared';

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

        // 需要创建的目录
        $dir = base_path($namespace);
        if (!is_dir($dir)) {
            mkdir($dir, 0777, true);
        }

        /*----------------创建Service( 模块下共用的Service )------------------*/
        // 需要创建的文件
        $file = $dir . '/' . $moduleAfterSection."Service.php";
        $handle = fopen($file, 'w+'); // 创建文件

        // 从 stub 文件中找到模板代码
        $content = file_get_contents(__DIR__."/stubs/service.stub");
        $content = str_replace(['DummyNamespace','DummyClass'],[ implode("\\",explode("/",$namespace)) ,$moduleAfterSection."Service"],$content);

        // 写入
        fwrite($handle, $content);

        $this->info("Shared-Service 创建成功");
        /*----------------创建Service( 模块下共用的Service )------------------*/




        /*----------------创建Service( 模块下共用的Service )------------------*/
        // 需要创建的文件
        $file = $dir . '/' . $moduleAfterSection."IndexService.php";
        $handle = fopen($file, 'w+'); // 创建文件

        // 从 stub 文件中找到模板代码
        $content = file_get_contents(__DIR__."/stubs/indexService.stub");
        $content = str_replace(['DummyNamespace','DummyClass'],[ implode("\\",explode("/",$namespace)) ,$moduleAfterSection."IndexService"],$content);

        // 写入
        fwrite($handle, $content);

        $this->info("Shared-IndexService 创建成功");
        /*----------------创建Service( 模块下共用的Service )------------------*/





        /*----------------创建Model------------------*/
        // 需要创建的文件
        $file = $dir . '/' . $moduleAfterSection."Model.php";
        $handle = fopen($file, 'w+'); // 创建文件

        // 从 stub 文件中找到模板代码
        $content = file_get_contents(__DIR__."/stubs/model.stub");
        $content = str_replace(['DummyNamespace','DummyClass'],[ implode("\\",explode("/",$namespace)) ,$moduleAfterSection."Model"],$content);

        // 写入
        fwrite($handle, $content);

        $this->info("Shared-Model 创建成功");
        /*----------------创建Model------------------*/


        $this->info("Shared 创建成功");
    }


}
