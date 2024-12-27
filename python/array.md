Python 리스트(Array)에서 자주 사용하는 메소드와 활용법

Python에서 리스트(배열)는 가장 많이 사용되는 데이터 구조 중 하나로, 다양한 메소드를 제공합니다. 여기에서는 자주 사용되는 리스트 메소드들을 예제와 함께 정리합니다. 이 자료는 블로그 작성용으로 적합합니다! 😊

1. append()

설명:
• 리스트의 끝에 항목을 추가합니다.

활용 예제:

arr = [1, 2, 3]
arr.append(4)
print(arr) # [1, 2, 3, 4]

2. extend()

설명:
• 리스트의 끝에 다른 리스트나 이터러블의 항목들을 추가합니다.

활용 예제:

arr = [1, 2, 3]
arr.extend([4, 5])
print(arr) # [1, 2, 3, 4, 5]

3. insert()

설명:
• 특정 위치에 항목을 삽입합니다.

활용 예제:

arr = [1, 2, 3]
arr.insert(1, 4) # 인덱스 1에 4 삽입
print(arr) # [1, 4, 2, 3]

4. remove()

설명:
• 리스트에서 첫 번째로 일치하는 항목을 제거합니다.

활용 예제:

arr = [1, 2, 3, 2]
arr.remove(2) # 첫 번째 2 제거
print(arr) # [1, 3, 2]

5. pop()

설명:
• 지정한 위치의 항목을 제거하고 반환합니다.
• 인덱스를 지정하지 않으면 마지막 항목을 제거합니다.

활용 예제:

arr = [1, 2, 3]
value = arr.pop(1) # 인덱스 1의 값 제거
print(value) # 2
print(arr) # [1, 3]

6. clear()

설명:
• 리스트의 모든 항목을 제거합니다.

활용 예제:

arr = [1, 2, 3]
arr.clear()
print(arr) # []

7. index()

설명:
• 리스트에서 특정 값의 첫 번째 인덱스를 반환합니다.
• 값이 없으면 오류가 발생합니다.

활용 예제:

arr = [1, 2, 3, 2]
idx = arr.index(2) # 첫 번째 2의 인덱스
print(idx) # 1

8. count()

설명:
• 리스트에서 특정 값의 개수를 반환합니다.

활용 예제:

arr = [1, 2, 3, 2]
count = arr.count(2)
print(count) # 2

9. sort()

설명:
• 리스트를 제자리에서 정렬합니다.
• 기본은 오름차순이며, reverse=True로 내림차순 정렬이 가능합니다.

활용 예제:

arr = [3, 1, 4, 2]
arr.sort() # 오름차순
print(arr) # [1, 2, 3, 4]

arr.sort(reverse=True) # 내림차순
print(arr) # [4, 3, 2, 1]

10. sorted()

설명:
• 리스트를 정렬하여 새로운 리스트를 반환합니다.

활용 예제:

arr = [3, 1, 4, 2]
sorted_arr = sorted(arr) # 새 리스트 생성
print(sorted_arr) # [1, 2, 3, 4]
print(arr) # [3, 1, 4, 2] (원본 유지)

11. reverse()

설명:
• 리스트의 순서를 제자리에서 반대로 뒤집습니다.

활용 예제:

arr = [1, 2, 3]
arr.reverse()
print(arr) # [3, 2, 1]

12. reversed()

설명:
• 리스트를 뒤집은 새로운 이터레이터를 반환합니다.

활용 예제:

arr = [1, 2, 3]
reversed_arr = list(reversed(arr))
print(reversed_arr) # [3, 2, 1]

13. copy()

설명:
• 리스트의 얕은 복사본을 반환합니다.

활용 예제:

arr = [1, 2, 3]
copy_arr = arr.copy()
print(copy_arr) # [1, 2, 3]

14. len()

설명:
• 리스트의 길이를 반환합니다.

활용 예제:

arr = [1, 2, 3]
length = len(arr)
print(length) # 3

15. 리스트 컴프리헨션

설명:
• 리스트를 생성하거나 변환하는 간결한 방법.

활용 예제:

# 1~5의 제곱 리스트 생성

squares = [x**2 for x in range(1, 6)]
print(squares) # [1, 4, 9, 16, 25]

# 짝수만 필터링

even_numbers = [x for x in range(1, 11) if x % 2 == 0]
print(even_numbers) # [2, 4, 6, 8, 10]

블로그 정리 요약

리스트 메소드 요약

메소드 설명
append() 리스트 끝에 항목 추가
extend() 리스트 끝에 다른 리스트나 이터러블 추가
insert() 특정 위치에 항목 삽입
remove() 첫 번째 일치 항목 제거
pop() 지정된 위치의 항목 제거 및 반환
clear() 리스트의 모든 항목 제거
index() 특정 값의 첫 번째 인덱스 반환
count() 특정 값의 개수 반환
sort() 리스트 정렬 (제자리에서)
sorted() 정렬된 새 리스트 반환
reverse() 리스트를 제자리에서 뒤집음
reversed() 뒤집은 새 이터레이터 반환
copy() 리스트 복사
len() 리스트 길이 반환

활용 사례
• 데이터를 동적으로 추가하거나 삭제할 때 → append(), remove()
• 데이터를 정렬하거나 변환할 때 → sort(), sorted()
• 리스트를 필터링하거나 새 리스트를 생성할 때 → 리스트 컴프리헨션
• 리스트를 뒤집거나 복사할 때 → reverse(), copy()

이 자료를 정리하여 블로그로 작성하면 Python 리스트를 배우는 초보자들에게 큰 도움이 될 것입니다! 😊
