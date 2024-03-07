function solution(sizes) {
  const sortSizes = sizes.map((size) => {
    return size[0] < size[1] ? size.reverse() : size;
  });

  const [x, y] = sortSizes.reduce((acc, curr) => {
    curr.forEach((value, index) => {
      if (acc[index] === undefined || value > acc[index]) {
        acc[index] = value;
      }
    });
    return acc;
  }, []);
  return x * y;
}