def solution(my_string, m, c):
    result = ''
    answer = []
    leng = len(my_string) // m
    for i in range(leng):
        answer.append(list(my_string[i * m:i*m+m]))
    for i in range(leng):
        result += answer[i][c - 1]
    return result 