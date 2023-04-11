{
  function binary_search(array, target) {
    let left = 0;
    let right = array.length - 1;

    while (left <= right) {
      let mid = Math.floor((left + right) / 2);

      if (array[mid] === target) return mid;
      else if (array[mid] > target) right = mid - 1;
      else left = mid + 1;
    }
  }

  const array = [1, 2, 3, 4, 5, 6, 7, 8];
  const target = 4;

  console.log(binary_search(array, target));
}
