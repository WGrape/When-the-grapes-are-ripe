<?php

// 定义路由

$class = workflowOfSinger\moduleOfRelease\ReleaseController::class;

Route::get('/singer/release/album', $class . "@releaseAlbum");

