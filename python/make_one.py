def make_num_one(num):
    dp = [0] * (num + 1)
    for i in range(2, num + 1):
        dp[i] = dp[i - 1] + 1
        if i % 2 == 0:
            dp[i] = min(dp[i], dp[i // 2] + 1)
        if i % 3 == 0:
            dp[i] = min(dp[i], dp[i // 3] + 1)
        print(dp[i])   
        

print(make_num_one(10)) # 3

