<?php

namespace workflowFoundation\Shared\Constants;


/**
 * 需要的所有常量
 * Class Constant
 * @package App\WorkflowFoundation\Shared\Constants
 */
class Constant
{

    // workflow 和 pool
    const WORKFLOW = 'workflow';
    const POOL = 'pool';

    // workflow.status
    const WORKFLOW_STATUS = 'workflow.status';

    // workflow.input.data,workflow.business.data,workflow.output.data
    const WORKFLOW_INPUT_DATA = 'workflow.input.data';
    const WORKFLOW_BUSINESS_DATA = 'workflow.business.data';
    const WORKFLOW_OUTPUT_DATA = 'workflow.output.data';

    // workflow的3种状态数据
    const WORKFLOW_THREE_STATES_DATA = [

        self::WORKFLOW_INPUT_DATA,
        self::WORKFLOW_BUSINESS_DATA,
        self::WORKFLOW_OUTPUT_DATA,
    ];




    /*-------------响应部分-----------------*/
    const WORKFLOW_RESPONSE_ENABLE = 'workflow.responseNormally.enable';
    const WORKFLOW_RESPONSE_DATA = 'workflow.response.data';
    const WORKFLOW_RESPONSE_CODE = 'workflow.response.code';
    const WORKFLOW_RESPONSE_MSG = 'workflow.response.msg';

    const WORKFLOW_RESPONSE_STATUS = 'workflow.response.status';
    const WORKFLOW_RESPONSE_HEADERS = 'workflow.response.headers';
    const WORKFLOW_RESPONSE_OPTIONS = 'workflow.response.options';

    const WORKFLOW_RESPONSE = [

        self::WORKFLOW_RESPONSE_ENABLE,
        self::WORKFLOW_RESPONSE_DATA,
        self::WORKFLOW_RESPONSE_CODE,
        self::WORKFLOW_RESPONSE_MSG,

        self::WORKFLOW_RESPONSE_STATUS,
        self::WORKFLOW_RESPONSE_HEADERS,
        self::WORKFLOW_RESPONSE_OPTIONS,
    ];
    /*-------------响应部分-----------------*/



    // Hook 在 Service 执行前 , 执行后才执行业务
    const HOOK_ON_SERVICE_BEFORE = 'before';
    const HOOK_ON_SERVICE_AFTER = 'after';


}