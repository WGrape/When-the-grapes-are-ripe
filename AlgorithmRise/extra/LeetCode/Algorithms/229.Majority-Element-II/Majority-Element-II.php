class Solution {

    // 错误理解, 以为只要出现次数最多(唯一最多)即可, 其实不是的
    
    /**
     * @param Integer[] $nums
     * @return Integer[]
     */
    function majorityElement($nums) {
        
        
        
        $map = [];
        
        foreach( $nums as $num ){

            !isset($map[ $num ]) ? $map[ $num ]=1 : ++$map[ $num ];
        }

        arsort($map);
                        
        print_r($map);
        
        if (count($map) > 1 && count($map)*current($map)===array_sum($map) ){
            
            return [];
        }
        
        
        $result=[];
        $first=true;$max = -1;
        foreach($map as $index => $value){
            
            if($first){
                
                $first=false;
                $max=$value;
                
                if($value != next($map)){
                    
                    $result[] = $index;        
                }
            
            }
                          
            if($value>$max){

                $result[] = $index;
            }
            
        }
        
        return $result;
    }
}
