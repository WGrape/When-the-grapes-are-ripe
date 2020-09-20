<?php


namespace App\Console\Commands;


use Illuminate\Console\Command;

class DeleteModule extends Command
{

    /**
     * 控制台命令 signature 的名称。
     *
     * @var string
     */
    protected $signature = 'qk:deleteModule {moduleName} {wantToDeleteAll?}';

    /**
     * 控制台命令说明。
     *
     * @var string
     */
    protected $description = 'deleteModule 删除一个 module';

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
        $moduleName = $this->argument('moduleName');

        // 模块名切割成2部分
        $sections = explode('/', $moduleName);
        $sections[0] = "workflowOf" . $sections[0];

        $this->call("qk:deleteRoute", ['moduleName' => $moduleName]);
        $this->call("qk:deleteController", ['moduleName' => $moduleName]);
        $this->call("qk:deleteInput", ['moduleName' => $moduleName]);
        $this->call("qk:deleteBusiness", ['moduleName' => $moduleName]);
        $this->call("qk:deleteOutput", ['moduleName' => $moduleName]);
        $this->call("qk:deleteShared", ['moduleName' => $moduleName]);

        $this->info("{$sections[1]} 模块删除成功");

        // 是否想要删除此module全部的内容 ( php artisan qk:deleteModule workflowOfAdmin/courseOnline y )
        $wantToDeleteAll = strtolower($this->argument("wantToDeleteAll"));
        if ($wantToDeleteAll === 'y') {

            if (is_dir($dir = trim(base_path("{$sections[0]}/moduleOf" . ucwords($sections[1]))))) {

                if (!empty($dir)) {

                    // 为了安全 , 坚决不使用 rm 命令
                    $this->info("还是你自己删除 module 目录吧");

                }
                $this->info("{$sections[1]} 模块删除成功 - 全部删除");
            }
        }
    }

}

