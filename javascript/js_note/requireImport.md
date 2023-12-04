# require와 import의 차이점

- `require`는 [CommonJS](#gear-commonjs)를 사용하는 node.js문이지만 `import`는 ES6에서만 사용됩니다.
- `require`는 파일(non-lexical,비어휘적)에 저장된 위치에 남아 있으며 `import`는 항상 맨 위로 이동합니다.
- `require`는 프로그램의 어느 지점에서나 호출 할 수 있지만 `import`는 파일의 시작 부분에서만 실행할 수 있습니다. (하지만 import전용 비동기 문법으로 처리 가능)
- 일반적으로 `import`는 사용자가 필요한 모듈 부분만 선택하고 로드 할 수 있기 때문에 더 선호됩니다. 이 명령문은 `require`보다 성능이 우수하며 메모리를 절약합니다.

<br>

<br>

> 기본적으로 require와 import는 모듈 키워드입니다. 외부 파일이나 라이브러리를 불러올 때 사용합니다.
> `require`는 NodeJS에서 사용되고 있는 CommonJS 키워드이고, `import`는 ES6(ES2015)에서 새롭게 도입된 키워드입니다.
> <br>
>
> ```javascript
> const moment = require("moment");
> ```
>
> CommonJS 방식을 따른 첫번째 코드는 Ruby처럼 require 키워드를 사용하여 여타 다른 변수를 할당하듯이 모듈을 불러오는 반면에,
> <br>
>
> ```js
> import moment from "moment";
> ```
>
> ES6 방식을 따른 두번째 코드는 Java나 Python처럼 import 키워드를 사용하여 좀 더 명시적으로 모듈을 불러오고 있습니다.
> <br>
> 최근 ES6(ES2015) 모듈 시스템인 `import` 가 많이 사용되고 있지만, 그러나 아직까지는 `import` 키워드가 100% 대체되어 사용될 수 없습니다.
> <br>
> Babel과 같은 ES6 코드를 변환(transpile)해주는 도구를 사용할 수 없는 경우에는 `require` 키워드를 사용해야 합니다.

<br>

---

<br>
