{
  /**
   * 문제해결방법
   * friends 배열의 idx를 친구의 idx로 정하였다.
   *
   * 주고받은 선물과 선물지수를 2차원 배열로 저장한다.
   * 다음달 받는 선물갯수는 1차원 배열로 저장하고, 친구의 idx를 기준으로 값을 저장한다.
   */
  function solution(friends: string[], gifts: string[]) {
    const cnt = friends.length;
    const friendIdxs = friends.reduce((acc, cur, idx) => {
      acc[cur] = idx;
      return acc;
    }, {});
    const giveAndTakeTable = Array.from({ length: cnt }, () =>
      Array.from({ length: cnt }, () => 0)
    );
    const giftCnt = Array.from({ length: cnt }, () => [0, 0, 0]);
    const nextMonthTakeCnt = Array.from({ length: cnt }, () => 0);

    // 선물을 준 정보(gifts)를 이용해서,
    // 주고받은 선물정보와 선물지수를 계산한다.
    // O(gifts.length)
    for (let i = 0; i < gifts.length; i++) {
      const [giver, taker] = gifts[i].split(" ");

      const giverIdx = friendIdxs[giver];
      const takerIdx = friendIdxs[taker];

      giveAndTakeTable[giverIdx][takerIdx]++;
      giftCnt[giverIdx][0]++;
      giftCnt[giverIdx][2] = giftCnt[giverIdx][0] - giftCnt[giverIdx][1];

      giftCnt[takerIdx][1]++;
      giftCnt[takerIdx][2] = giftCnt[takerIdx][0] - giftCnt[takerIdx][1];
    }

    // 다음달 받는 선물갯수를 계산한다.
    // O(friends.length^2)
    for (let i = 0; i < cnt; i++) {
      for (let j = 0; j < cnt; j++) {
        if (i == j) continue;
        if (giveAndTakeTable[i][j] > giveAndTakeTable[j][i]) {
          nextMonthTakeCnt[i]++;
        }
        if (giveAndTakeTable[i][j] === giveAndTakeTable[j][i]) {
          if (giftCnt[i][2] > giftCnt[j][2]) {
            nextMonthTakeCnt[i]++;
          }
        }
      }
    }

    return Math.max(...nextMonthTakeCnt);
  }
}
