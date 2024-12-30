def solution(my_string):
    answer = []
    leng = len(my_string)
    for i in range(leng):
        answer.append(my_string[i:leng])
    return sorted(answer)