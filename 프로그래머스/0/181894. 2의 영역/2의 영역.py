def solution(arr):
    arrIdx = []
    for i, v in enumerate(arr):
        if v == 2:
            arrIdx.append(i)
    lenth = len(arrIdx)
    if  lenth== 0:
        return [-1]
    elif lenth == 1:
        return [arr[arrIdx[0]]]
    else:
        a = max(arrIdx)
        b = min(arrIdx)
        return arr[b:a+1]