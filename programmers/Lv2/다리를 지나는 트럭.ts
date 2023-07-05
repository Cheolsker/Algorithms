type Truck = {
  length: number;
  weight: number;
};

function solution(
  bridge_length: number,
  weight: number,
  truck_weights: number[]
) {
  let time = 0;
  let pass_trucks_weights = 0;
  const pass_trucks: Truck[] = [];

  while (pass_trucks.length || truck_weights.length) {
    time += 1;
    pass_trucks_weights = 0;

    pass_trucks.forEach((truck) => {
      truck.length += 1;
      pass_trucks_weights += truck.weight;
    });

    if (pass_trucks?.[0]?.length > bridge_length) {
      const truck = pass_trucks.shift();
      pass_trucks_weights -= (truck as Truck).weight;
    }

    if (pass_trucks_weights + truck_weights[0] <= weight) {
      const truck = {
        weight: truck_weights.shift(),
        length: 1,
      };

      pass_trucks.push(truck as any);
    }
  }

  return time;
}

console.log(solution(2, 10, [7, 4, 5, 6])); // 8
console.log(solution(100, 100, [10])); // 101
console.log(solution(100, 100, [10, 10, 10, 10, 10, 10, 10, 10, 10, 10])); // 110
