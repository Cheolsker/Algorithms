function kClosest(points: number[][], k: number): number[][] {
  points.sort(([x1, y1], [x2, y2]) => {
    const d1 = x1 * x1 + y1 * y1;
    const d2 = x2 * x2 + y2 * y2;

    return d1 <= d2 ? -1 : 1;
  });

  return points.slice(0, k);
}
