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

## CompilerOptions

```json
{
  "compilerOptions": {
    "target": "ES2015",
    "module": "ESNext",
    "moduleResolution": "Node",
    "jsx": "preserve",
    "strict": true,
    "esModuleInterop": true,
    "lib": ["ESNext", "DOM"]
  }
}
```

| 옵션                         | 기본값                      | 설명                                                                       | 허용 값 예시                             |
| ---------------------------- | --------------------------- | -------------------------------------------------------------------------- | ---------------------------------------- |
| target                       | `"ES3"`                     | 컴파일될 ES(JS) 버전 명시, `"ES2015"`(ES6)를 권장(대부분의 브라우저 지원)  | `"ES3"`, `"ES5"`, `"ES2015"`, `"ESNext"` |
| lib                          | -                           | 컴파일에서 사용할 라이브러리 지정                                          | `"ESNext"`, `"DOM"`                      |
| module                       | `"CommonJS"`                | 모듈 시스템 지정                                                           | `"CommonJS"`, `"AMD"`, `"ESNext"`        |
| moduleResolution             | `"Node"`                    | 모듈 해석 방식 지정                                                        | `"Classic"`, `"Node"`                    |
| esModuleInterop              | `false`                     | ESM 모듈 방식 호환성 활성화                                                |
| isolatedModules              | `false`                     | 모든 파일을 모듈로 컴파일, `import` 혹은 `export`가 없는 경우 에러         |
| allowSyntheticDefaultImports | `true`                      | 기본 내보내기(`export default`)가 없는 모듈에서 기본 가져오기 가능         |
| baseUrl                      | -                           | 모듈 해석에 사용할 기준 경로 지정                                          | `"./"`, `"./project/"`                   |
| paths                        | -                           | 모듈 해석에 사용할 경로 별칭 지정                                          | `{"~/*": ["./src/*"]}`                   |
| types                        | -                           | 컴파일러가 참조할 @types 패키지의 목록을 지정, 명시되지 않으면 무시        | `["lodash", "node", "jest"]`             |
| typeRoots                    | `["./node_modules/@types"]` | 컴파일러가 참조할 타입 선언(d.ts)의 경로 목록을 지정, 명시되지 않으면 무시 | `["./types", "./node_modules/@types"]`   |
| allowJs                      | `false`                     | JS 파일 컴파일 허용                                                        |
| checkJs                      | `false`                     | `.js` 파일의 오류 보고 여부, `allowJs`가 `true`일 때만 유효                |
| jsx                          | `"preserve"`                | JSX 지정                                                                   | `"preserve"`, `"react"`                  |
| declaration                  | `true`                      | 모든 TS(JS) 파일의의 d.ts 파일 생성 여부                                   |
| sourceMap                    | `false`                     | 소스맵 파일 생성 여부, 디버깅 도구 등에서 JS 파일의 원본 TS 파일 표시 가능 |
| strict                       | `false`                     | 더 엄격한 타입 검사 활성화                                                 |
| noImplicitAny                | `false`                     | 암시적 `any` 타입 검사 활성화                                              |
| noImplicitThis               | `false`                     | 암시적 `this` 타입 검사 활성화                                             |
| strictNullChecks             | `false`                     | 엄격한 `null`, `undefined` 타입 검사 활성화                                |
| strictFunctionTypes          | `false`                     | 엄격한 함수의 매개변수 타입 검사 활성화                                    |
| strictPropertyInitialization | `false`                     | 엄격한 클래스의 속성 초기화 검사 활성화                                    |
| strictBindCallApply          | `false`                     | 엄격한 Bind, Call, Apply 메소드의 인수 검사 활성화                         |
