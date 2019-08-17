<?php

class Naja
{

    // 计算一组数据的和sum, 最小值min, 最大值max, 平均值acg, 众数mode, 中位数median
    private function computeStatisticsOfNumbers($numbers)
    {
        $numbers_sort = $numbers;

        // 平均值
        $sum = array_sum($numbers);
        $count = count($numbers);
        $avg = $sum / $count;

        // 最大/小值
        sort($numbers_sort);
        $min = $numbers_sort[0];
        $max = $numbers_sort[count($numbers_sort) - 1];

        // 求中位数
        $median = 0;
        if (0 === $count % 2) {

            $end = $count / 2;
            $median = ($numbers_sort[$end - 1] + $numbers_sort[$end]) / 2;
        } else {

            $end = floor($count / 2);
            $median = $numbers_sort[$end];
        }

        return [

            'sum' => $sum,
            'count' => $count,
            'avg' => $avg,

            'min' => $min,
            'max' => $max,

            'median' => $median,
        ];
    }

    // 选出numbers中某个范围内的数字
    private function pickNumbersFromRange($numbers, $from, $to)
    {
        if ($from > $to) {
            $temp = $to;
            $to = $from;
            $from = $temp;
        }

        sort($numbers);

        $arr = [];
        foreach ($numbers as $number) {

            if ($number >= $from && $number <= $to) {

                $arr[] = $number;
                continue;
            }

            if ($number > $to) {
                break;
            }
        }

        return $arr;
    }

    // 影响因子
    private $effectFactor = [

        // 自然因素
        "nature" => [

            // 不同的天气
            "weather" => ["w1", "w2", "w3", "w4", "w5", "w6", "w7", "w8", "w9", "w10", "w11", "w12",],
        ],

        // 非自然因素
        "unnatural" => [

        ],
    ];

    // 历史数据 按时间升序
    private $history = [

        "EffectFactor" => [

            // w1, w2, ... , w(n-1), wn
            "weather" => [],
        ],

        // P1, P2, ... , Pn-1, Pn
        "Price" => [

        ],
    ];

    function __construct()
    {
    }


    // 根据历史数据分析每一个影响因子的权重值
    public function computeWeightOfEffectFactor()
    {


    }

    // 通过影响率公式得出未来时间的价格影响率, [0,1] 是其所在范围, 其中 [0, 0.499] 是正常范围, [0.5,1] 是异常范围
    public function computeEffectRate($day)
    {


    }

    // 根据生成的未来的影响率，得出价格浮动区间
    public function computeFloatArea($rate)
    {
        $area = [];

        return $area;
    }

    // 按时间顺序列出区间内的所有价格, 求出价格的转移概率/转移矩阵
    public function computeTransitionMatrix($area){

        $transitionMatrix = [];


        // 在这个遍历的过程中 ，会不断纠正矫正转移矩阵
        return $transitionMatrix;
    }

    // 根据生成的转移概率/转移矩阵求未来的价格
    public function predictByTransitionMatrix($transitionMatrix){

        // 应用了马尔科夫链
        $result = null;

        return $result;
    }

    public function example()
    {

        // 以苹果为例

        // 先计算每一个影响因子的权重值
        $this->computeWeightOfEffectFactor();

        // 计算明天的影响率
        $rate = $this->computeEffectRate(1);

        // 得出明天的价格浮动区间
        $area = $this->computeFloatArea($rate);

        // 得出转移矩阵
        $transitionMatrix = $this->computeTransitionMatrix($area);

        // 得出预测的结果
        $result = $this->predictByTransitionMatrix($transitionMatrix);

    }

    // 导入历史数据
    public function import()
    {


    }

    public function predict()
    {

    }

    public function auto()
    {


    }

}