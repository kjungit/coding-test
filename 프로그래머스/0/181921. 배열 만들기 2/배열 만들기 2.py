def solution(l, r):
    answer = []
    for i in range(l, r + 1):
        if all(digit in '05' for digit in str(i)):
            answer.append(i)
    return answer if len(answer) != 0 else [-1]
    