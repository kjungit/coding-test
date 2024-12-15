### 4. Gas

이더리움 네트워크에서 거래를 실행하거나 스마트 컨트랙트를 호출하기 위해 필요한 연산 비용입니다.

- Gas는 **Gwei 단위**로 표현됩니다.
- 거래 수수료는 `Gas Price * Gas Limit`로 계산됩니다.

#### 용어 설명

- **Gas Limit**: 특정 작업을 수행하는 데 필요한 최대 Gas 양.
- **Gas Price**: Gas 1 단위당 지불할 금액 (주로 Gwei 단위 사용).

#### 예제 (Web3.js)

```javascript
// Gas Price 가져오기
const gasPrice = await web3.eth.getGasPrice();
console.log(`Gas Price in Wei: ${gasPrice}`);
console.log(`Gas Price in Gwei: ${web3.utils.fromWei(gasPrice, "gwei")}`);
```

### 5. Nonce

특정 계정의 거래 수를 나타내는 숫자입니다.

- 이더리움의 트랜잭션은 **Nonce**를 사용하여 순서를 보장합니다.
- Nonce는 특정 주소에서 보낸 총 거래 수를 의미합니다.

#### 예제 (Web3.js)

```javascript
const nonce = await web3.eth.getTransactionCount("0xYourAddress");
console.log(`Nonce: ${nonce}`);
```

### 6. Gas Price와 Gas Limit

Gas와 관련된 두 가지 핵심 요소입니다.

- **Gas Price**: 거래나 연산에 대해 지불하려는 단위당 비용.
- **Gas Limit**: 특정 작업에서 사용할 수 있는 최대 Gas 양.

#### 예제 (Web3.js)

```javascript
const gasPrice = await web3.eth.getGasPrice(); // Gas Price 조회
console.log(`Gas Price in Wei: ${gasPrice}`);
console.log(`Gas Price in Gwei: ${web3.utils.fromWei(gasPrice, "gwei")}`);

const gasLimit = 21000; // 기본 거래의 Gas Limit
console.log(`Gas Limit: ${gasLimit}`);
```
