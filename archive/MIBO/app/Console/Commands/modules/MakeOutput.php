<?php

namespace App\Console\Commands\Modules;

use Illuminate\Console\Command;


class MakeOutput extends Command
{
    /**
     * 控制台命令 signature 的名称。
     *
     * @var string
     */
    protected $signature = 'qk:makeOutput {moduleName}';

    /**
     * 控制台命令说明。
     *
     * @var string
     */
    protected $description = '创建 Output';

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

        // 需要创建的目录
        $dir = base_path($namespace);
        if (!is_dir($dir)) {
            mkdir($dir, 0777, true);
        }

        // 需要创建的文件
        $file = $dir . '/' . $moduleAfterSection."Filter.php";
        $handle = fopen($file, 'w+'); // 创建文件


        // 从 stub 文件中找到模板代码
        $content = file_get_contents(__DIR__."/stubs/filter.stub");
        $content = str_replace(['DummyNamespace','DummyClass'],[ implode("\\",explode("/",$namespace)) ,$moduleAfterSection."Filter"],$content);

        // 写入
        fwrite($handle, $content);

        $this->info("Output 创建成功");
    }


}
