### 7. Transaction (트랜잭션)

이더리움 네트워크에서 데이터를 전송하거나 상태를 변경하는 작업입니다.

#### 트랜잭션 구성 요소

- **from**: 송신자의 주소.
- **to**: 수신자의 주소.
- **value**: 전송 금액 (주로 wei 단위).
- **gas**: Gas Limit.
- **gasPrice**: Gas 단가.

#### 예제 (Web3.js)

```javascript
const tx = {
  from: "0xYourAddress",
  to: "0xRecipientAddress",
  value: web3.utils.toWei("0.1", "ether"), // 0.1 ETH를 wei로 변환
  gas: 21000,
  gasPrice: web3.utils.toWei("10", "gwei"), // 10 Gwei로 설정
};

const signedTx = await web3.eth.accounts.signTransaction(tx, "YourPrivateKey");
await web3.eth.sendSignedTransaction(signedTx.rawTransaction);
```

````markdown
### 8. Block (블록)

이더리움 네트워크에서 데이터를 기록하는 기본 단위입니다.

- 블록은 트랜잭션, 해시, Nonce 등의 정보를 포함합니다.

#### 주요 블록 관련 용어

- **Block Number**: 특정 블록의 번호.
- **Block Hash**: 특정 블록의 고유 해시값.
- **Timestamp**: 블록 생성 시간.

#### 예제 (Web3.js)

```javascript
const latestBlock = await web3.eth.getBlock("latest");
console.log(latestBlock);
```
````

````markdown
### 9. ABI (Application Binary Interface)

스마트 컨트랙트와 상호작용하기 위해 사용하는 인터페이스입니다.

- 함수 호출, 데이터 변환 등을 처리할 때 사용됩니다.

#### 예제 (Web3.js)

```javascript
const contract = new web3.eth.Contract(abi, contractAddress);
const result = await contract.methods.myMethod().call();
console.log(result);
```
````
