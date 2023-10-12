{
  let arr = [-11, 2, 10, 5, 0, 7];

  // for문을 이용
  function bubble_sort(arr: number[], order: "asc" | "desc") {
    const length = arr.length;

    for (let i = 0; i < length - 1; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (order === "asc" && arr[j] > arr[j + 1]) {
          [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
        }

        if (order === "desc" && arr[j] < arr[j + 1]) {
          [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
        }
      }
    }
  }

  // Array.prototype.forEach를 이용
  function bubble_sort_foreach(arr: number[], order: "asc" | "desc") {
    const length = arr.length;

    arr.forEach((_, i) => {
      arr.forEach((_, j) => {
        if (j > length - 1 - i) return;

        if (order === "asc" && arr[j] > arr[j + 1]) {
          [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
        }

        if (order === "desc" && arr[j] < arr[j + 1]) {
          [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
        }
      });
    });
  }

  // 오름차순 정렬
  console.time(`TIME 1`);

  bubble_sort(arr, "asc");
  console.log(arr);

  console.timeEnd(`TIME 1`);

  // 내림차순 정렬
  console.time(`TIME 2`);
  arr = [-11, 2, 10, 5, 0, 7];

  bubble_sort(arr, "desc");
  console.log(arr);

  console.timeEnd(`TIME 2`);

  // 오름차순 정렬
  console.time(`TIME 3`);
  arr = [-11, 2, 10, 5, 0, 7];

  bubble_sort_foreach(arr, "asc");
  console.log(arr);

  console.timeEnd(`TIME 3`);

  // 내림차순 정렬
  console.time(`TIME 4`);
  arr = [-11, 2, 10, 5, 0, 7];

  bubble_sort_foreach(arr, "desc");
  console.log(arr);

  console.timeEnd(`TIME 4`);
}
