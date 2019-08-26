<?php

namespace workflowFoundation\Shared\Services\Captcha;

use workflowFoundation\Shared\Services\BaseService;

// 手机验证码服务
class PhoneCaptchaService extends BaseService implements CaptchaServiceImpl
{
    /**
     * @param $code mixed 待匹配的code
     * @param $identity mixed 身份标识
     * @return boolean
     */
    public function match($code, $identity)
    {

        return true ;
    }

    public function generate()
    {
    }

    public function throttle()
    {
    }
}