import java.util.*;
import java.util.stream.IntStream;

class Solution {
    public int solution(int[] queue1, int[] queue2) {
        Deque<Integer> deque1 = toDeque(queue1);
        Deque<Integer> deque2 = toDeque(queue2);
        long totalSum = IntStream.concat(Arrays.stream(queue1), Arrays.stream(queue2)).asLongStream().sum();

        if (totalSum % 2 != 0) {
            return -1;
        }
        
        long half = totalSum / 2;
        int cnt = 0;
        int max = (queue1.length + queue2.length) * 2;
        
        long deque1Sum = calculateSum(deque1);
        long deque2Sum = calculateSum(deque2);
        
        
        while (cnt <= max) {
            if (deque1Sum == half && deque2Sum == half) {
                return cnt;
            }
            
            if (deque1Sum > deque2Sum) {
                int val = deque1.removeFirst();
                deque2.addLast(val);
                deque2Sum += val;
                deque1Sum -= val;
            } else {
                int val = deque2.removeFirst();
                deque1.addLast(val);
                deque1Sum += val;
                deque2Sum -= val;
            }
            cnt++;
        }
        
        return -1;
    }
    
    public long calculateSum(Deque<Integer> list) {
        int[] arr = list.stream().mapToInt(Integer::intValue).toArray();
        
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