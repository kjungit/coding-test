def solution(my_string, is_suffix):
    answer = [my_string[i:len(my_string)] for i in range(len(my_string))]
    return 1 if is_suffix in answer else 0 