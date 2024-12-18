def solution(age):
    answer = ""
    arr = list(str(age))
    for i in arr:
        answer += chr(97 + int(i))
    return answer