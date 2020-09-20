<?php


namespace workflowFoundation\Shared\Services\Captcha;


interface CaptchaServiceImpl
{

    // 匹配验证码是否是正确的
    /**
     * @param $code mixed 待匹配的code
     * @param $identity mixed 身份标识
     * @return boolean
     */
    public function match($code, $identity);

    // 生成验证码
    public function generate();

    // 限制验证码的生成频率
    public function throttle();

}