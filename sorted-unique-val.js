let arr = [22, 11, 77, 33, 11, 77, 22, 55, 22];
function sortedUniqueVal(arr) {
  let result = arr.filter((elem, index, arr) => {
    return arr.indexOf(elem) == index;
  });
  let data = result.sort((a, b) => a - b);

  return data;
}
console.log(sortedUniqueVal(arr));
