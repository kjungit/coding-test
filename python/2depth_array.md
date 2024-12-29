Python에서 이중 배열(2D Array)을 조작하는 방법

Python에서는 리스트(List)를 사용하여 이중 배열(2D Array)을 다룰 수 있습니다. 이중 배열은 리스트 안에 리스트가 포함된 구조입니다. 여기에서는 이중 배열을 생성, 접근, 수정하고 조작하는 다양한 방법과 메소드들을 정리하겠습니다.

1. 이중 배열 생성

고정된 배열

# 3x3 이중 배열 생성

array = [
[1, 2, 3],
[4, 5, 6],
[7, 8, 9]
]
print(array)

동적으로 생성

# 3x3 배열에 모두 0으로 초기화

rows, cols = 3, 3
array = [[0] \* cols for \_ in range(rows)]
print(array)

2. 배열 접근

개별 요소 접근

array = [
[1, 2, 3],
[4, 5, 6],
[7, 8, 9]
]

# 특정 요소에 접근 (row=1, col=2)

print(array[1][2]) # 6

행(row) 또는 열(column) 접근

# 특정 행 가져오기

print(array[1]) # [4, 5, 6]

# 특정 열 가져오기

col_idx = 1
column = [row[col_idx] for row in array]
print(column) # [2, 5, 8]

3. 배열 수정

개별 요소 수정

array[1][2] = 10 # row=1, col=2 값을 10으로 변경
print(array)

행(row) 수정

array[1] = [10, 11, 12] # 2번째 행을 새 리스트로 대체
print(array)

열(column) 수정

col_idx = 2
for row in array:
row[col_idx] = 20 # 모든 행의 3번째 열 값을 20으로 변경
print(array)

4. 배열 추가 및 삭제

행(row) 추가

new_row = [13, 14, 15]
array.append(new_row) # 행 추가
print(array)

열(column) 추가

new_col = [10, 20, 30]
for i in range(len(array)):
array[i].append(new_col[i]) # 각 행에 열 추가
print(array)

행(row) 삭제

array.pop(1) # 2번째 행 삭제
print(array)

열(column) 삭제

col_idx = 1
for row in array:
row.pop(col_idx) # 각 행의 2번째 열 삭제
print(array)

5. 배열 순회

행(row) 단위 순회

for row in array:
print(row)

이중 for문으로 전체 순회

for row in array:
for item in row:
print(item, end=" ")
print()

6. 배열의 크기 구하기

rows = len(array) # 행(row)의 개수
cols = len(array[0]) if rows > 0 else 0 # 열(column)의 개수
print(f"Rows: {rows}, Cols: {cols}")

7. 배열 정렬

행(row) 단위로 정렬

array = [
[3, 1, 2],
[9, 8, 7],
[6, 4, 5]
]

# 각 행을 정렬

for row in array:
row.sort()
print(array)

열(column) 단위로 정렬

# 1번째 열 기준으로 정렬

array.sort(key=lambda x: x[1])
print(array)

8. 배열 변환 (Transpose)

직접 구현

transposed = [[row[i] for row in array] for i in range(len(array[0]))]
print(transposed)

zip()을 활용

transposed = list(map(list, zip(\*array)))
print(transposed)

9. 배열의 일부 추출

슬라이싱을 사용하여 특정 행 추출

# 1번째부터 2번째 행까지

subset = array[1:3]
print(subset)

특정 열 추출

col_idx = 1
subset = [row[col_idx] for row in array]
print(subset)

10. numpy를 활용한 이중 배열 조작

Python의 기본 리스트 대신 numpy 라이브러리를 사용하면 더 강력한 배열 조작이 가능합니다.

numpy 배열 생성

import numpy as np

array = np.array([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
print(array)

배열 조작

# Transpose

transposed = array.T
print(transposed)

# 행(row) 추가

new_row = np.array([10, 11, 12])
array = np.vstack([array, new_row])
print(array)

# 열(column) 추가

new_col = np.array([13, 14, 15, 16])
array = np.column_stack([array, new_col])
print(array)

블로그 정리 요약

이중 배열에서 자주 사용하는 작업들

작업 메소드 및 방법 예제 코드
요소 접근 array[row][col] array[1][2]
요소 수정 array[row][col] = value array[1][2] = 10
행 추가 array.append(new_row) array.append([1, 2, 3])
열 추가 row.append(value) 반복 for row in array: row.append(10)
행 삭제 array.pop(row_index) array.pop(1)
열 삭제 row.pop(col_index) 반복 for row in array: row.pop(1)
정렬 sort() 또는 lambda로 정렬 array.sort(key=lambda x: x[1])
Transpose zip() 또는 numpy T list(zip(\*array))
numpy 활용 numpy.array, vstack, T np.array([[...], [...]])

이 자료는 Python 이중 배열을 다룰 때 필요한 핵심 개념과 메소드를 모두 포함하며, 블로그에 정리하면 실용적인 참고 자료가 될 것입니다! 😊
