from collections import deque

def rotate_queue(n, targets):
    queue = deque(range(1, n+1))
    count = 0
    for target in targets:
        while queue[0] != target:
            if queue.index(target) < len(queue) // 2:
                queue.append(queue.popleft())
            else:
                queue.appendleft(queue.pop())
            count += 1
        queue.popleft()
    return count


