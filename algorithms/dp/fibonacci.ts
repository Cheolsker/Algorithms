{
  const MAX_DP_LENGTH = 100001;

  /**
   * 일반적인 재귀방식의 풀이
   */
  function fibonacci1(n: number): number {
    if (n <= 1) {
      return n;
    }

    return fibonacci1(n - 1) + fibonacci1(n - 2);
  }

  /**
   * 다이나믹 프로그래밍의 하향식 풀이 - 메모이제이션
   *
   * 재귀함수와 dp 테이블을 사용
   */
  const dp = new Array<bigint>(MAX_DP_LENGTH).fill(BigInt(0)); // input 1만개까지 대응

  function fibonacci2(n: number): bigint {
    if (n <= 1) {
      return BigInt(n);
    }

    if (dp[n] !== BigInt(0)) {
      return dp[n];
    }

    dp[n] = fibonacci2(n - 1) + fibonacci2(n - 2);
    // console.log(`dp[${n} : ${dp[n]}]`);

    return dp[n];
  }

  /**
   * 다이나믹 프로그래밍 - 상향식 풀이 (타뷸레이션)
   *
   * dp 테이블을 이용해서 작은 n부터 계산하면서 dp[n]을 갱신
   */
  function fibonacci3(n: number): bigint {
    const dp = new Array<bigint>(MAX_DP_LENGTH).fill(BigInt(0));

    dp[0] = BigInt(0);
    dp[1] = BigInt(1);

    for (let i = 2; i <= n; i++) {
      dp[i] = dp[i - 1] + dp[i - 2];
    }

    return dp[n];
  }

  /**
   *
   * 테스트
   *
   */
  const inputs = [1, 10, 30, 50, 100, 1000, 5000, 8500, 10000, 100000];

  for (let i = 0; i < inputs.length; i++) {
    const label = `case ${i + 1} | length-${inputs[i]}`;
    const input = inputs[i];

    console.time(label);
    /**
     * <fibonacci1>
     *
     * case 1 | length-1: 0.036ms
     * case 2 | length-10: 0.008ms
     * case 3 | length-30: 7.892ms
     *
     * 30개를 넘으면, 시간 초과
     *
     */
    // const result = fibonacci1(inputs[i]);

    /**
     * <fibonacci2>
     *
     * case 1 | length-1: 0.038ms
     * case 2 | length-10: 0.007ms
     * case 3 | length-30: 0.003ms
     * case 4 | length-50: 0.018ms
     * case 5 | length-100: 0.007ms
     * case 6 | length-1000: 0.057ms
     * case 7 | length-5000: 0.245ms
     * case 8 | length-8500: 4.097ms
     *
     * 갯수가 8500개를 넘어가면 스택오버플로우 발생!
     */
    // const result = fibonacci2(input);

    /**
     * <fibonacci3>
     *
     * case 1 | length-1: 0.064ms
     * case 2 | length-10: 0.014ms
     * case 3 | length-30: 0.02ms
     * case 4 | length-50: 0.019ms
     * case 5 | length-100: 0.019ms
     * case 6 | length-1000: 0.049ms
     * case 7 | length-5000: 0.277ms
     * case 8 | length-8500: 0.652ms
     * case 9 | length-10000: 1.067ms
     * case 10 | length-100000: 197.021ms
     *
     * fibonacci2에 비해 전반적으로 성능이 좋음
     * fibonacci2는 재귀함수를 사용하므로, 특정 input 갯수에서 스택오버플로우 발생
     * fibonacci3는 테이블 길이만 충분하다면, 로직을 수행함
     */
    const result = fibonacci3(input);

    console.timeEnd(label);
    console.log(result);
  }
}
