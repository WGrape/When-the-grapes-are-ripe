<?php

namespace workflowFoundation\Shared\Services\Captcha;

use workflowFoundation\Shared\Services\BaseService;


class ImgCaptchaService extends BaseService implements CaptchaServiceImpl
{

    public function match($code, $identity)
    {
    }

    public function generate()
    {

    }

    // 图片验证码的频率限制
    public function throttle()
    {

        // 1秒只能生成1次

        return true;
    }
}