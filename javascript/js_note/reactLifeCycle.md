# React의 생명 주기(라이프 사이클)

리액트는 컴포넌트 기반의 View를 중심으로 한 라이브러리입니다. 그러다보니 각각의 컴포넌트에는 라이프 사이클 즉, 컴포넌트의 생명 주기가 존재합니다. 컴포넌트의 생명은 보통 페이지에서 렌더링되기 전인 준비 과정에서 시작하여 페이지에서 사라질 때 끝이 납니다.

<br>

<img src="../../Images/important-3/react-lifecycle.png" width="800px">

> 위의 이미지는 리액트의 생명 주기를 나타낸 화면입니다. <br>
> 이미지에서 볼 수 있듯이 컴포넌트는 `생성 => 업데이트 => 제거`의 생명 주기를 갖고 있습니다. <br>
> 그럼 이제 각각의 라이프 사이클이 무엇이고 어떻게 Class와 Hooks를 활용한 함수형 컴포넌트에서 사용하는지 알아보도록 하겠습니다. <br>
> 아래 목록에서 자주 사용되는 메서드는 `코드블럭`으로 표시하겠습니다. 나머지는 상대적으로 덜 사용됩니다.

<br>

<br>

## 마운트(생성)

컴포넌트의 [인스턴스](gear-)가 생성되어, DOM에 삽입될 때 순서대로 호출됩니다.

- `constructor()`
- getDerivedStateFromProps()
- `render()`
- `componentDidMount()`

<br>

## 업데이트

props나 state가 변경되면 렌더(갱신)가 진행되며 순서대로 호출됩니다.

- getDerivedStateFromProps()
- shouldComponentUpdate()
- `render()`
- getSnapshotBeforeUpdate()
- `componentDidUpdate()`

<br>

## 마운트 해제(제거)

아래 메서드는 컴포넌트가 DOM에서 제거될 때 호출됩니다.

- `componentWillUnmount()`

<br>

<br>

위에 명시된 자주 사용되는 생명 주기 메서드에 대해 간략한 소개를 하겠습니다.

<br>

<br>

### `render()`

클래스 컴포넌트에서 반드시 구현되어야 하는 유일한 메서드입니다.

- 이 메서드가 호출되면 this.props와 this.state의 값을 활용하여 값을 반환합니다.
- render() 함수는 컴포넌트의 state를 변경하지 않고, 호출될 때마다 동일한 결과를 반환하며 브라우저와 직접적인 상호작용을 하지 않습니다.

<br>

```js
// Class
class Example extends React.Component {
  render() {
    return <div>컴포넌트</div>;
  }
}

// Hooks
const example = () => {
  return <div>컴포넌트</div>;
};
```

> 함수형 컴포넌트에서는 render를 안쓰고 컴포넌트를 렌더링할 수 있습니다.

<br>
