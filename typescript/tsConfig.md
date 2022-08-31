# 타입스크립트 구성

`tsconfig.json` 파일을 사용해 타입스크립트 컴파일러가 프로젝트를 JS로 변환하는 방법을 지정합니다.

```json
{
  "compilerOptions": {},
  "files": ["node_modules/my-library/index.ts"],
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"],
  "extends": "config/base.json"
}
```

| 옵션            | 우선순위 | 설명                                                                                                                 |
| --------------- | -------- | -------------------------------------------------------------------------------------------------------------------- |
| compilerOptions | -        | 컴파일러 옵션 지정                                                                                                   |
| files           | 1        | 컴파일할 개별 파일 목록(확장자 필수!)Configuration                                                                   |
| exclude         | 2        | 컴파일에서 제외할 파일 경로 목록                                                                                     |
| include         | 3        | 컴파일할 파일 경로 목록<br/>(`.ts`, `.tsx`, `.d.ts` 확장자 생략 가능,<br/>`allowJS: true`인 경우 `.js`, `.jsx` 추가) |
| extends         | -        | 상속할 다른 TS 구성                                                                                                  |
