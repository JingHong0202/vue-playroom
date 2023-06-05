function u(e, r, i) {
  let n = 0, o = e.length - 1, l = null;
  const _ = i === "vertical" ? "__bottom" : "__right";
  for (; n <= o; ) {
    const t = n + (o - n >> 1);
    if (e[t][_] > r)
      (l === null || l > t) && (l = t), o = t - 1;
    else if (e[t][_] < r)
      n = t + 1;
    else if (e[t][_] === r)
      return e[t].__index + 1;
  }
  return l;
}
export {
  u as binarySearch
};
