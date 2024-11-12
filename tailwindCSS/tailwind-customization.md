
# Tailwind CSS 커스텀 설정 및 활용

## 1. 커스텀 테마 설정 (`tailwind.config.js`)
Tailwind CSS의 기본 테마를 확장하여 프로젝트에 맞는 스타일을 정의할 수 있습니다.

### 1.1 색상 추가 예제
```js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#E23B4A',
        secondary: '#191919',
        accent: '#00B4D8',
      },
    },
  },
};
```

### 1.2 폰트 설정
```js
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Noto Sans KR', 'Arial', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
    },
  },
};
```

## 2. 커스텀 유틸리티 클래스 작성

### 2.1 예시: 애니메이션 효과 추가
```js
module.exports = {
  theme: {
    extend: {
      keyframes: {
        bounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      animation: {
        bounce: 'bounce 1s infinite',
      },
    },
  },
};
```

### 2.2 커스텀 반응형 브레이크포인트
```js
module.exports = {
  theme: {
    screens: {
      'xs': '480px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
  },
};
```

## 3. 유용한 Tailwind 활용 팁

### 3.1 그룹 호버 사용
```html
<div class="group">
  <button class="bg-gray-200 group-hover:bg-gray-400 text-black">Hover me</button>
</div>
```

### 3.2 다크 모드 지원
```js
module.exports = {
  darkMode: 'class',
  theme: {
    extend: {},
  },
};
```

## 4. Tailwind와 함께 사용하는 도구
- **Heroicons**: Tailwind와 호환되는 무료 아이콘 세트.
- **DaisyUI**: Tailwind를 위한 UI 컴포넌트 라이브러리.
- **Headless UI**: 접근성 있는 UI 컴포넌트를 제공.
