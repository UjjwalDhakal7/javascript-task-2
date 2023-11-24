


// find the maximum repeat array and return it as object with no. of count.



function maxRepeat(arr) {
  const result = arr.reduce((acc, val) => {
    acc[val] = (acc[val] || 0) + 1;
    if (!acc.max || acc[val] > acc[acc.max]) {
      acc.max = val;
    }
    return acc;
  }, { max: null });
  return result;
}

const arr = [1, 2, 3, 4, 2, 2, 3, 3, 3];
 console.log(maxRepeat(arr));
