const multiplyByClosure = (mult) => {
  const values = [0, 0.5, 1, 2, 3, 4, 5, 'a', false];
  return values.map((value) => {
    if(typeof value === 'number') {
      return value * mult;
    }
    return value;
  });
}

const countZeroValues = (values) => {
  return values.filter((value) => value === 0).length;
}
