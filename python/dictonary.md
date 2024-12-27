Python 딕셔너리에서 자주 사용하는 메소드와 활용법

1. items()

설명:
• 딕셔너리의 (키, 값) 쌍을 튜플 형태로 반환합니다.
• 반환값: dict_items 객체 (이터러블).

활용 예제:

# 딕셔너리 정의

my_dict = {'a': 1, 'b': 2, 'c': 3}

# items()로 (키, 값) 쌍 출력

for k, v in my_dict.items():
print(f"Key: {k}, Value: {v}")

출력:

Key: a, Value: 1
Key: b, Value: 2
Key: c, Value: 3

2. keys()

설명:
• 딕셔너리의 모든 키를 반환합니다.
• 반환값: dict_keys 객체 (이터러블).

활용 예제:

my_dict = {'a': 1, 'b': 2, 'c': 3}

# keys()로 모든 키 가져오기

keys = my_dict.keys()
print(keys) # dict_keys(['a', 'b', 'c'])

# 키 순회

for key in keys:
print(key)

출력:

a
b
c

3. values()

설명:
• 딕셔너리의 모든 값을 반환합니다.
• 반환값: dict_values 객체 (이터러블).

활용 예제:

my_dict = {'a': 1, 'b': 2, 'c': 3}

# values()로 모든 값 가져오기

values = my_dict.values()
print(values) # dict_values([1, 2, 3])

# 값 순회

for value in values:
print(value)

출력:

1
2
3

4. sorted()

설명:
• 딕셔너리를 정렬하려면 보통 items(), keys(), 또는 values()를 사용하여 정렬 기준을 지정합니다.
• 반환값: 정렬된 리스트.

활용 예제:

(1) 키를 기준으로 정렬

my_dict = {'b': 2, 'c': 3, 'a': 1}

sorted_by_keys = sorted(my_dict.items(), key=lambda x: x[0])
print(sorted_by_keys)

출력:

[('a', 1), ('b', 2), ('c', 3)]

(2) 값을 기준으로 정렬

sorted_by_values = sorted(my_dict.items(), key=lambda x: x[1])
print(sorted_by_values)

출력:

[('a', 1), ('b', 2), ('c', 3)]

5. get()

설명:
• 지정된 키의 값을 가져옵니다.
• 키가 없으면 None 또는 기본값을 반환합니다.

활용 예제:

my_dict = {'a': 1, 'b': 2}

print(my_dict.get('a')) # 1
print(my_dict.get('z')) # None
print(my_dict.get('z', 'default')) # default

6. pop()

설명:
• 지정된 키의 값을 반환하고, 딕셔너리에서 해당 키-값 쌍을 제거합니다.

활용 예제:

my_dict = {'a': 1, 'b': 2, 'c': 3}

value = my_dict.pop('b') # b 키 제거
print(value) # 2
print(my_dict) # {'a': 1, 'c': 3}

7. update()

설명:
• 딕셔너리에 다른 딕셔너리 또는 키-값 쌍을 추가합니다.

활용 예제:

my_dict = {'a': 1, 'b': 2}
my_dict.update({'c': 3, 'd': 4})
print(my_dict)

출력:

{'a': 1, 'b': 2, 'c': 3, 'd': 4}

8. setdefault()

설명:
• 지정된 키가 존재하지 않으면 기본값을 추가하고 반환합니다.
• 키가 존재하면 해당 값을 반환합니다.

활용 예제:

my_dict = {'a': 1}

value = my_dict.setdefault('b', 2)
print(value) # 2 (b 키 추가)
print(my_dict) # {'a': 1, 'b': 2}

9. clear()

설명:
• 딕셔너리의 모든 항목을 제거합니다.

활용 예제:

my_dict = {'a': 1, 'b': 2}
my_dict.clear()
print(my_dict) # {}

10. fromkeys()

설명:
• 지정된 키들로 새 딕셔너리를 생성합니다.
• 모든 키에 대해 동일한 값을 할당합니다.

활용 예제:

keys = ['a', 'b', 'c']
default_value = 0
new_dict = dict.fromkeys(keys, default_value)
print(new_dict)

출력:

{'a': 0, 'b': 0, 'c': 0}

11. copy()

설명:
• 딕셔너리의 얕은 복사본을 생성합니다.

활용 예제:

my_dict = {'a': 1, 'b': 2}
copy_dict = my_dict.copy()
print(copy_dict)

출력:

{'a': 1, 'b': 2}

블로그 정리 요약

핵심 메소드 목록

메소드 설명
items() 키와 값을 튜플 형태로 반환
keys() 모든 키를 반환
values() 모든 값을 반환
sorted() 정렬된 리스트 반환
get() 키에 해당하는 값을 반환
pop() 키를 제거하며 값을 반환
update() 다른 딕셔너리를 병합
setdefault() 기본값 추가 후 반환
clear() 모든 항목 제거
fromkeys() 키 목록으로 새 딕셔너리 생성
copy() 딕셔너리 복사

활용 사례
• 데이터를 정렬, 필터링, 변환하는 다양한 작업.
• 안전하게 값을 조회하거나 기본값을 설정.
• 데이터를 효율적으로 업데이트하거나 병합.
