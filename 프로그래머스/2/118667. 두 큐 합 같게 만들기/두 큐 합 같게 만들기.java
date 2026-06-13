import java.util.*;
import java.util.stream.IntStream;

class Solution {
    public int solution(int[] queue1, int[] queue2) {
        Deque<Integer> deque1 = toDeque(queue1);
        Deque<Integer> deque2 = toDeque(queue2);
        
        long sum1 = getSum(queue1);
        long sum2 = getSum(queue2);
        long total = sum1 + sum2;

        if (total % 2 != 0) {
            return -1;
        }
        
        long half = total / 2;
        int cnt = 0;
        int max = (queue1.length + queue2.length) * 2;
        
        while (cnt <= max) {
            if (sum1 == half && sum2 == half) {
                return cnt;
            }
            
            if (sum1 > half) {
                int val = deque1.removeFirst();
                deque2.addLast(val);
                sum2 += val;
                sum1 -= val;
            } else {
                int val = deque2.removeFirst();
                deque1.addLast(val);
                sum1 += val;
                sum2 -= val;
            }
            cnt++;
        }
        
        return -1;
    }
    
    public long getSum(int[] arr) {
        long n = 0;
        for (int num : arr) {
            n += num;
        }
        return n;
    }
    
    public Deque<Integer> toDeque(int[] arr) {
        Deque<Integer> deque = new ArrayDeque<>();
        
        for (int num : arr) {
            deque.offerLast(num);
        }
        
        return deque;
    }
}