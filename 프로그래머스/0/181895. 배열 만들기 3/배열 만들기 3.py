def solution(arr, intervals):
    a, b = intervals
    return [*arr[a[0]:a[1]+1], *arr[b[0]:b[1]+1]]