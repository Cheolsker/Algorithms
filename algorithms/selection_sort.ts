{
  const TIME = "TIME";
  let arr = [-11, 2, 10, 5, 0, 7];

  // for 문을 이용
  function selection_sort(arr: number[], order: "asc" | "desc") {
    for (let i = 0; i < arr.length - 1; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (order === "asc" && arr[i] > arr[j]) {
          [arr[j], arr[i]] = [arr[i], arr[j]];
        }

        if (order === "desc" && arr[i] < arr[j]) {
          [arr[j], arr[i]] = [arr[i], arr[j]];
        }
      }
    }
  }

  // Array.prototype.forEach를 이용
  function selection_sort_foreach(arr: number[], order: "asc" | "desc") {
    arr.forEach((_, i) => {
      arr.forEach((_, j) => {
        if (i >= j) return;

        if (order === "asc" && arr[i] > arr[j]) {
          [arr[j], arr[i]] = [arr[i], arr[j]];
        }

        if (order === "desc" && arr[i] < arr[j]) {
          [arr[j], arr[i]] = [arr[i], arr[j]];
        }
      });
    });
  }

  // 오름차순 정렬 테스트
  console.time(TIME + 1);

  selection_sort(arr, "asc");

  console.log(arr);
  console.timeEnd(TIME + 1);

  // 내림차순 정렬 테스트
  arr = [-11, 2, 10, 5, 0, 7];
  console.time(TIME + 2);

  selection_sort(arr, "desc");

  console.log(arr);
  console.timeEnd(TIME + 2);

  // 오름차순 정렬 테스트
  arr = [-11, 2, 10, 5, 0, 7];
  console.time(TIME + 3);

  selection_sort_foreach(arr, "asc");

  console.log(arr);
  console.timeEnd(TIME + 3);

  // 내림차순 정렬 테스트
  arr = [-11, 2, 10, 5, 0, 7];
  console.time(TIME + 4);

  selection_sort_foreach(arr, "desc");

  console.log(arr);
  console.timeEnd(TIME + 4);
}
