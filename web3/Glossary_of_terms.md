# Web3에서 ETH와 관련된 주요 용어 정리

Web3.js는 이더리움 블록체인과 상호작용하기 위해 사용되는 JavaScript 라이브러리입니다. 이더리움의 단위와 관련된 용어는 이더(ETH) 및 그 하위 단위, 그리고 잔액 관리 및 변환과 같은 작업에서 자주 사용됩니다. 아래는 Web3.js에서 사용하는 주요 용어를 정리한 목록입니다.

---

## 주요 용어

### 1. **ETH (Ether)**

이더리움 네트워크에서 사용되는 기본 암호화폐입니다.

- 거래 수수료, 스마트 컨트랙트 실행 비용(Gas) 등을 지불하는 데 사용됩니다.
- 1 ETH는 1,000,000,000,000,000,000 wei(10^18 wei)입니다.

---

### 2. **Wei**

이더리움의 최소 단위로, 1 ETH는 10^18 wei입니다.

- 모든 이더리움 거래와 연산은 내부적으로 wei 단위로 처리됩니다.
- Web3.js를 사용할 때 주로 wei 단위로 금액을 입력하고 출력합니다.

#### 주요 단위 변환

| 단위            | ETH로의 비율        | 설명                       |
| --------------- | ------------------- | -------------------------- |
| **Wei**         | 1 wei = 10^-18 ETH  | 가장 작은 단위             |
| **Kwei**        | 1 Kwei = 10^-15 ETH | 킬로웨이                   |
| **Mwei**        | 1 Mwei = 10^-12 ETH | 메가웨이                   |
| **Gwei**        | 1 Gwei = 10^-9 ETH  | 가스 가격 단위로 자주 사용 |
| **Ether (ETH)** | 1 ETH = 10^18 wei   | 기본 단위                  |

#### 예제 (Web3.js)

```javascript
// wei를 ETH로 변환
const weiToEth = web3.utils.fromWei('1000000000000000000', 'ether'); // 1 ETH

// ETH를 wei로 변환
const ethToWei = web3.utils.toWei('1', 'ether'); // 1000000000000000000 wei

3. Balance

지갑 또는 스마트 컨트랙트의 계정 잔액입니다.
	•	잔액은 wei 단위로 반환됩니다.

예제 (Web3.js)

const balance = await web3.eth.getBalance('0xYourAddress');
console.log(`Balance in Wei: ${balance}`);
console.log(`Balance in ETH: ${web3.utils.fromWei(balance, 'ether')}`);

4. Gas

이더리움 네트워크에서 거래를 실행하거나 스마트 컨트랙트를 호출하기 위해 필요한 연산 비용입니다.
	•	Gas는 Gwei 단위로 표현됩니다.
	•	거래 수수료는 Gas Price * Gas Limit로 계산됩니다.

용어 설명
	•	Gas Limit: 특정 작업을 수행하는 데 필요한 최대 Gas 양.
	•	Gas Price: Gas 1 단위당 지불할 금액 (주로 Gwei 단위 사용).

예제 (Web3.js)

// Gas Price 가져오기
const gasPrice = await web3.eth.getGasPrice();
console.log(`Gas Price in Wei: ${gasPrice}`);
console.log(`Gas Price in Gwei: ${web3.utils.fromWei(gasPrice, 'gwei')}`);

5. Nonce

특정 계정의 거래 수를 나타내는 숫자입니다.
	•	이더리움의 트랜잭션은 Nonce를 사용하여 순서를 보장합니다.
	•	Nonce는 특정 주소에서 보낸 총 거래 수를 의미합니다.

예제 (Web3.js)

const nonce = await web3.eth.getTransactionCount('0xYourAddress');
console.log(`Nonce: ${nonce}`);

6. Gas Price와 Gas Limit

Gas와 관련된 두 가지 핵심 요소입니다.
	•	Gas Price: 거래나 연산에 대해 지불하려는 단위당 비용.
	•	Gas Limit: 특정 작업에서 사용할 수 있는 최대 Gas 양.

예제 (Web3.js)

const gasPrice = await web3.eth.getGasPrice(); // Gas Price 조회
const gasLimit = 21000; // 기본 거래의 Gas Limit

7. Transaction (트랜잭션)

이더리움 네트워크에서 데이터를 전송하거나 상태를 변경하는 작업입니다.
	•	from: 송신자의 주소.
	•	to: 수신자의 주소.
	•	value: 전송 금액 (주로 wei 단위).
	•	gas: Gas Limit.
	•	gasPrice: Gas 단가.

예제 (Web3.js)

const tx = {
  from: '0xYourAddress',
  to: '0xRecipientAddress',
  value: web3.utils.toWei('0.1', 'ether'), // 0.1 ETH를 wei로 변환
  gas: 21000,
  gasPrice: web3.utils.toWei('10', 'gwei'), // 10 Gwei로 설정
};

const signedTx = await web3.eth.accounts.signTransaction(tx, 'YourPrivateKey');
await web3.eth.sendSignedTransaction(signedTx.rawTransaction);

8. Block (블록)

이더리움 네트워크에서 데이터를 기록하는 기본 단위입니다.
	•	블록은 트랜잭션, 해시, Nonce 등의 정보를 포함합니다.

주요 블록 관련 용어
	•	Block Number: 특정 블록의 번호.
	•	Block Hash: 특정 블록의 고유 해시값.
	•	Timestamp: 블록 생성 시간.

예제 (Web3.js)

const latestBlock = await web3.eth.getBlock('latest');
console.log(latestBlock);

9. ABI (Application Binary Interface)

스마트 컨트랙트와 상호작용하기 위해 사용하는 인터페이스입니다.
	•	함수 호출, 데이터 변환 등을 처리할 때 사용됩니다.

예제 (Web3.js)

const contract = new web3.eth.Contract(abi, contractAddress);
const result = await contract.methods.myMethod().call();

결론

이더리움 네트워크에서 Web3.js를 활용하려면 이더리움 단위와 Gas, 트랜잭션, 잔액과 같은 기본 개념을 이해해야 합니다. 위에서 정리한 용어는 Web3.js로 블록체인 애플리케이션을 개발할 때 필수적으로 알아야 할 기초 지식을 제공합니다.

```
