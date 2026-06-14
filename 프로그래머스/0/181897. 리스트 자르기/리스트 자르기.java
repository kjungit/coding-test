import java.util.*;

class Solution {
    public int[] solution(int n, int[] slicer, int[] num_list) {
        List<Integer> list = new ArrayList<>();
        
        int[] sliced;
        
        int a = slicer[0];
        int b = slicer[1] + 1;
        int c = slicer[2];
        
        
        switch(n) {
            case 1:
                sliced = Arrays.copyOfRange(num_list, 0, b);
                return toArray(sliced);
            case 2:
                sliced = Arrays.copyOfRange(num_list, a, num_list.length);
                return toArray(sliced);
            case 3:
                sliced = Arrays.copyOfRange(num_list, a, b);
                return toArray(sliced);
            case 4:
                for (int i = a; i < b; i+=c) {
                    list.add(num_list[i]);
                }
                return list.stream().mapToInt(Integer::intValue).toArray();
            default:
                return num_list;
        }
    }
    
    public int[] toArray(int[] arr) {
        List<Integer> list = new ArrayList<>();
        
        for (int num : arr) {
            list.add(num);
        }
        
        return list.stream().mapToInt(Integer::intValue).toArray();
    }
}