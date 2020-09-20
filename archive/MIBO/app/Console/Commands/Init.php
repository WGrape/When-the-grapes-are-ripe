<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

class Init extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'qk:init';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = "Init a Laravel App what it had done many things that you don't do";


    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {

        // 生成代码追踪
        passthru('﻿composer require --dev barryvdh/laravel-ide-helper') ;
        $this->call('ide-helper:generate');


        return null ;
    }
}
