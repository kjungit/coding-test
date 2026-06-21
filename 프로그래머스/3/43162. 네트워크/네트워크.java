import java.util.*;

class Solution {
    public int solution(int n, int[][] computers) {
        int answer = 0;
        boolean[] visited = new boolean[n];

        for (int i = 0; i < n; i++) {
            if(visited[i]) continue;
            answer++;
            visitAllConnectedComputers(computers, visited, i);
        }

        return answer;
    }


    void visitAllConnectedComputers(final int[][] computers, boolean[] visited, int c) {
        Stack<Integer> q = new Stack<>();
        q.push(c);
        while(!q.isEmpty()) {
            int i = q.pop();
            visited[i] = true;
            for (int j = 0; j < computers[i].length; j++) {
                if (visited[j]) continue;
                if (computers[i][j] == 1) q.push(j);
            }
        }
    }
}
