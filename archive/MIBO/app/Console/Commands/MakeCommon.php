<?php


namespace App\Console\Commands;


use Illuminate\Console\Command;

class MakeCommon extends Command
{

    /**
     * 控制台命令 signature 的名称。
     *
     * @var string
     */
    protected $signature = 'qk:makeCommon {sideName}';

    /**
     * 控制台命令说明。
     *
     * @var string
     */
    protected $description = 'makeCommon 创建一个 common 模块';

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
        // 只输入模块名即可 , 不用再输入 moduleOf
        $sideName = "workflowOf" . ucwords($this->argument('sideName'));

        $dir = base_path($sideName . "/common");
        if (!is_dir($dir)) {

            mkdir($dir, 0777, true);
            $this->info("common 模块创建成功");
        }

        $dir = base_path($sideName . "/common/Middleware");
        if (!is_dir($dir)) {

            mkdir($dir, 0777, true);
            $this->info("common-Middleware 创建成功");
        }

        $dir = base_path($sideName . "/common/Shared");
        if (!is_dir($dir)) {

            mkdir($dir, 0777, true);
            $this->info("common-Shared 创建成功");
        }
    }

}