class MedianFinder {

    public Queue<Integer> queue;

    /** initialize your data structure here. */
    public MedianFinder() {
        this.queue = new PriorityQueue<Integer>();
    }
    
    public void addNum(int num) {
        this.queue.offer(num);
    }
    
    public double findMedian() {
        
        int length = this.queue.size();
        if(0 == length){
            return 0;
        }

        Integer[] queue = this.queue.toArray( new Integer[ length ] );
        Arrays.sort(queue);

        if( 0 != length % 2 ){
            return queue[length/2];
        }

        int right = length/2;
        int left = right-1;
        return (queue[left] + queue[right])*0.5;
    }
}

/**
 * Your MedianFinder object will be instantiated and called as such:
 * MedianFinder obj = new MedianFinder();
 * obj.addNum(num);
 * double param_2 = obj.findMedian();
 */