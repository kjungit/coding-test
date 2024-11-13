
# Tailwind CSS 개요 및 기본 설정

## 1. Tailwind CSS란?
Tailwind CSS는 유틸리티 퍼스트(Utility-First) 접근 방식을 기반으로 한 CSS 프레임워크입니다. 사전 정의된 클래스를 사용하여 빠르고 일관성 있는 UI를 설계할 수 있습니다.

### 1.1 장점
- **생산성**: HTML 파일에서 바로 스타일을 정의하여 빠른 개발이 가능.
- **유연성**: 커스텀 스타일을 쉽게 추가하고 확장 가능.
- **최적화**: 사용하지 않는 CSS는 자동으로 제거하여 빌드 크기를 줄일 수 있음.

## 2. Tailwind CSS 설치

### 2.1 설치 명령어
```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### 2.2 프로젝트 설정 (`tailwind.config.js`)
```js
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

### 2.3 기본 스타일 파일 생성 (`src/index.css`)
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## 3. Tailwind CSS 기본 유틸리티 사용법

### 3.1 레이아웃 및 정렬
```html
<div class="flex justify-center items-center h-screen">
  <p class="text-center text-xl">Centered Content</p>
</div>
```

### 3.2 색상 및 배경
```html
<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  Click me
</button>
```

### 3.3 반응형 디자인
```html
<div class="w-full md:w-1/2 lg:w-1/3">
  반응형 레이아웃
</div>
```

---

## 4. 빌드 최적화 (PurgeCSS)
```js
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```
Tailwind CSS는 사용되지 않는 클래스를 제거하여 프로덕션 환경에서 최적화된 빌드를 제공합니다.
