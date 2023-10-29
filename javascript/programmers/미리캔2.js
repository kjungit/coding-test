const records = [
  "2020-02-02 uid1 pid1",
  "2020-02-26 uid1 pid1",
  "2020-02-26 uid2 pid1",
  "2020-02-27 uid3 pid2",
  "2020-02-28 uid4 pid2",
  "2020-02-29 uid3 pid3",
  "2020-03-01 uid4 pid3",
  "2020-03-03 uid1 pid1",
  "2020-03-04 uid2 pid1",
  "2020-03-05 uid3 pid2",
  "2020-03-05 uid3 pid3",
  "2020-03-05 uid3 pid3",
  "2020-03-06 uid1 pid4",
];
const k = 10;
const date = "2020-03-05";

// const records = [
//   "2020-02-02 uid141 pid141",
//   "2020-02-03 uid141 pid32",
//   "2020-02-04 uid32 pid32",
//   "2020-02-05 uid32 pid141",
// ];
// const k = 10;
// const date = "2020-02-05";

// const records = ["2020-01-01 uid1000 pid5000"];
// const k = 10;
// const date = "2020-01-11";

const result = solution(records, k, date);
function solution(records, k, date) {
  const targetDate = new Date(date);

  const purchaseRecords = {};

  for (const record of records) {
    const [recordDate, userId, productId] = record.split(" ");

    const purchaseDate = new Date(recordDate);

    // 재구매 기간을 날짜 비교에서 고려
    const kDaysAgo = new Date(targetDate);
    kDaysAgo.setDate(kDaysAgo.getDate() - k);

    // 월 단위로 날짜 비교를 수정
    if (
      purchaseDate >= kDaysAgo &&
      purchaseDate <= targetDate &&
      (targetDate.getMonth() - purchaseDate.getMonth() < 1 ||
        targetDate.getFullYear() - purchaseDate.getFullYear() === 1)
    ) {
      if (!purchaseRecords[productId]) {
        purchaseRecords[productId] = { total: 0, repeat: 0, productId };
      }
      purchaseRecords[productId].total++;

      if (purchaseRecords[productId][userId]) {
        purchaseRecords[productId][userId]++;
        if (purchaseRecords[productId][userId] > 1) {
          purchaseRecords[productId].repeat++;
        }
      } else {
        purchaseRecords[productId][userId] = 1;
      }
    }
  }

  const result = Object.values(purchaseRecords)
    .filter((record) => record.total > 1)
    .sort((a, b) => {
      const rateA = (a.repeat / a.total) * 100;
      const rateB = (b.repeat / b.total) * 100;
      if (rateA === rateB) {
        if (a.total === b.total) {
          const numA = parseInt(a.productId.replace(/\D/g, ""));
          const numB = parseInt(b.productId.replace(/\D/g, ""));
          return numA - numB; // 상품 아이디를 오름차순으로 정렬
        }
        return a.total - b.total;
      }
      return rateB - rateA; // 재구매율을 내림차순으로 정렬
    })
    .map((record) => record.productId);

  if (result.length === 0) {
    return ["no result"];
  }

  return result;
}

console.log(result); // ["pid1", "pid3", "pid2"]
