{
  function quick_sort_asc(array: number[], start: number, end: number) {
    if (start >= end) return;

    let pivot = start;
    let left = start + 1;
    let right = end;

    while (left <= right) {
      while (left <= end && array[left] <= array[pivot]) left++;
      while (right > start && array[right] >= array[pivot]) right--;

      if (left > right) {
        [array[right], array[pivot]] = [array[pivot], array[right]];
      } else {
        [array[left], array[right]] = [array[right], array[left]];
      }
    }

    quick_sort_asc(array, start, right - 1);
    quick_sort_asc(array, right + 1, end);
  }

  function quick_sort_desc(array: number[], start: number, end: number) {
    if (start >= end) return;

    let pivot = start;
    let left = start + 1;
    let right = end;

    while (left <= right) {
      // 피벗과 비교하는 값의 부등호만 바꿔주면 내림차순으로 변경할 수 있음
      while (left <= end && array[left] >= array[pivot]) left++;
      while (right > start && array[right] <= array[pivot]) right--;

      if (left > right) {
        [array[right], array[pivot]] = [array[pivot], array[right]];
      } else {
        [array[left], array[right]] = [array[right], array[left]];
      }
    }

    quick_sort_desc(array, start, right - 1);
    quick_sort_desc(array, right + 1, end);
  }

  const TIME = "TIME";
  let array = [5, 7, 9, 0, 3, 1, 6, 2, 4, 8];

  // 오름차순 정렬 테스트
  console.time(TIME + 1);

  quick_sort_asc(array, 0, array.length - 1);

  console.log(array);
  console.timeEnd(TIME + 1);

  // 내림차순 정렬 테스트
  array = [5, 7, 9, 0, 3, 1, 6, 2, 4, 8];
  console.time(TIME + 2);

  quick_sort_desc(array, 0, array.length - 1);

  console.log(array);
  console.timeEnd(TIME + 2);
}
