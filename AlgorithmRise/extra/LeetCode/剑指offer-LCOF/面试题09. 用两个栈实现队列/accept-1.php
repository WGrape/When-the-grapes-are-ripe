class CQueue {

private $queue;

/**
 */
function __construct() {
    $this -> queue = [];
}

/**
 * @param Integer $value
 * @return NULL
 */
function appendTail($value) {
    
    $this->queue[] = $value;

    return null;
}

/**
 * @return Integer
 */
function deleteHead() {
    if( empty( $this->queue ) ){
        return -1;
    }

    return array_shift($this->queue);
}
}

/**
* Your CQueue object will be instantiated and called as such:
* $obj = CQueue();
* $obj->appendTail($value);
* $ret_2 = $obj->deleteHead();
*/