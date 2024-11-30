Next.js 15 버전 변경 사항

React 19 지원

Next.js 15는 React 19를 지원하며, 최소 react 및 react-dom 버전이 19로 상향되었습니다. ￼

비동기 요청 API 변경

이전에는 동기적으로 접근하던 cookies, headers, draftMode, params, searchParams 등의 API가 이제 비동기적으로 변경되었습니다. 이는 서버 컴포넌트에서 요청별 데이터를 처리하기 위함입니다. ￼

캐싱 기본값 변경

    •	fetch 요청: 기본적으로 더 이상 캐시되지 않습니다. 특정 요청을 캐시하려면 cache: 'force-cache' 옵션을 사용해야 합니다. ￼
    •	GET 메서드의 Route Handlers: 기본적으로 캐시되지 않습니다. 캐시를 활성화하려면 export const dynamic = 'force-static'을 설정해야 합니다. ￼
    •	클라이언트 사이드 라우터 캐시: 페이지 세그먼트는 기본적으로 캐시되지 않습니다. 캐시를 활성화하려면 staleTimes 설정 옵션을 사용할 수 있습니다. ￼

next/font 통합

이제 @next/font 패키지가 내장된 next/font로 대체되었습니다. 기존 코드를 업데이트하려면 codemod를 사용하여 가져오기를 변경할 수 있습니다. ￼

외부 패키지 번들링 설정 안정화

    •	bundlePagesRouterDependencies: 이전의 experimental.bundlePagesExternals가 안정화되어 bundlePagesRouterDependencies로 이름이 변경되었습니다. ￼
    •	serverExternalPackages: 이전의 experimental.serverComponentsExternalPackages가 안정화되어 serverExternalPackages로 이름이 변경되었습니다. ￼

Speed Insights 제거

Next.js 15에서는 Speed Insights의 자동 계측 기능이 제거되었습니다. 계속 사용하려면 Vercel Speed Insights Quickstart 가이드를 참고하세요. ￼

NextRequest의 지리적 위치 지원

NextRequest 객체에서 지리적 위치 정보를 사용할 수 있게 되었습니다. ￼

개발자 경험 개선

    •	하이드레이션 오류 메시지 개선: 오류 발생 시 소스 코드와 해결 방법에 대한 제안을 포함하여 디버깅이 수월해졌습니다. ￼
    •	Turbopack Dev 안정화: 개발 환경에서의 성능과 안정성이 향상되었습니다. ￼

새로운 실험적 기능

    •	부분적 프리렌더링(Partial Prerendering, PPR): 동적 UI 컴포넌트를 Suspense 경계로 감싸 특정 레이아웃과 페이지에 대해 부분적 프리렌더링을 선택할 수 있는 기능이 도입되었습니다. ￼
    •	next/after API: 응답이 완료된 후 코드를 실행할 수 있는 새로운 실험적 기능이 추가되었습니다. ￼

create-next-app 업데이트

    •	새로운 디자인으로 업데이트되었으며, Turbopack을 로컬 개발에 사용할 수 있는 옵션이 추가되었습니다. ￼
    •	불필요한 파일을 제거하여 “Hello World” 페이지로 시작하는 --empty 플래그가 제공됩니다. ￼

ESLint 9 지원

ESLint 9에 대한 지원이 추가되었습니다. ￼

개발 및 빌드 성능 향상

빌드 시간 단축과 Fast Refresh 속도가 개선되었습니다. ￼

서버 액션 보안 강화

추측할 수 없는 엔드포인트와 사용되지 않는 액션의 제거를 통해 보안이 강화되었습니다. ￼

next.config.ts에서 TypeScript 지원

이제 next.config.ts 파일에서 TypeScript를 지원합니다. ￼

자체 호스팅 개선

Cache-Control 헤더에 대한 더 많은 제어가 가능해졌습니다. ￼

useFormState의 변경

useFormState가 useActionState로 대체되었습니다. useFormState는 여전히 React 19에서 사용할 수 있지만, 이는 더 이상 권장되지 않으며 향후 릴리스에서 제거될 예정입니다. ￼
