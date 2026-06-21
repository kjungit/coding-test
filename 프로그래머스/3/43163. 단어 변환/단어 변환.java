import java.util.*;

class Solution {
    class Word {
        String word;
        int depth;
        
        Word (String word, int depth) {
            this.word = word;
            this.depth = depth;
        }
    }
    
    public int solution(String begin, String target, String[] words) {
        if (!Arrays.asList(words).contains(target)) return 0;
        
        Queue<Word> queue = new LinkedList<>();
        boolean[] visited = new boolean[words.length];
        
        queue.offer(new Word(begin, 0));
        
        while (!queue.isEmpty()) {
            Word cur = queue.poll();
            
            if (cur.word.equals(target)) {
                return cur.depth;
            }
            
            for (int i = 0; i < words.length; i++) {
                if (visited[i]) {
                    continue;
                }
                
                if(changable(cur.word, words[i])) {
                    visited[i] = true;
                    
                    queue.offer(new Word(words[i], cur.depth + 1));
                }
            }
        }
        return 0;
    }
    
    boolean changable (String w1, String w2) {
        int diff = 0;
        
        for (int i = 0; i < w1.length(); i++) {
            if (w1.charAt(i) != w2.charAt(i)) {
                diff++;
            }
            if (diff > 1) {
                return false;
            }
        }
        return diff == 1;
    }
}