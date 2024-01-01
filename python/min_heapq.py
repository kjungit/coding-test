import heapq

def min_heapq(cards):
    if len(cards) == 1:
        return 0
    
    heapq.heapify(cards)
    total = 0

    while len(cards) > 1:
        a = heapq.heappop(cards)
        b = heapq.heappop(cards)
        com = a + b
        total += com
        heapq.heappush(cards, com)
    
    return total

cards = [10, 20, 40, 50]
print(min_heapq(cards)) 
# a = 10, b = 20, com = 30, total = 30
# a = 30, b = 40, com = 70, total = 100
# a = 50, b = 70, com = 120, total = 220
# 220