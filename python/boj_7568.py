def func(list):
    n = len(list)
    ranks=[1]*n
    for i in range(n):
        for j in range(n):
            if i == j:
                continue
            if list[i][0] < list[j][0] and list[i][1] < list[j][1]:
                ranks[i] += 1
    return ranks

people = [
    [55, 185],
    [58, 183],
    [88, 186],
    [60, 175],
    [46, 155]
]
print(func(people)) # [2, 2, 1, 2, 5]