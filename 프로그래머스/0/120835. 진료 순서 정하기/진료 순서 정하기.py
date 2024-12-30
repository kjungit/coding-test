def solution(emergency):
    answer = {}
    for i,v in enumerate(emergency):
        answer[len(emergency) - i] = v
    numeric_items = {k: v for k, v in answer.items() if isinstance(v, (int, float))}
    sorted_numeric_items = sorted(numeric_items.items(), key=lambda x: x[1])
    sorted_keys = [k for k, v in sorted_numeric_items]

    return sorted_keys