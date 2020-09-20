<?php

namespace workflowFoundation\Middleware\Pretreatment;


use Illuminate\Foundation\Http\Middleware\TransformsRequest;
use Illuminate\Support\Str;

class ConvertNumericStringsToInt extends TransformsRequest
{
    /**
     * The attributes that should not be trimmed.
     *
     * @var array
     */
    protected $except = [
        //
    ];

    /**
     * Transform the given value.
     *
     * @param  string $key
     * @param  mixed $value
     * @return mixed
     */
    protected function transform($key, $value)
    {

        $transform = false;
        if ($key === 'id') {

            // 参数为 id
            $transform = true;
        } else if (1 === preg_match('/^[a-zA-Z][0-9a-zA-Z]*_id$/', $key)) {

            // 参数为 *_id
            $transform = true;
        } else if (1 === preg_match('/^[a-zA-Z][0-9a-zA-Z]*Id$/', $key)) {

            // 参数为 *Id
            $transform = true;
        }

        if ($transform) {

            if (!is_numeric($value)) {

                return responseJsonOfFailure([], Str::strcat($key, '参数必须是整数'));
            }

            return is_numeric($value) ? intval($value) : $value;
        }

        // 返回原值
        return $value;
    }
}
