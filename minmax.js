

// function that takes an array of number and uses the reduce funstion to find min and max values and return them as object with properties min and max.

function minmax(arr){
  const minNum = arr.reduce((a, b) => {
    return Math.min(a, b);
  });
  
  const maxNum = arr.reduce((a, b) => {
    return Math.max(a, b);
  });

  return{
    minNum,
    maxNum
  }
}

const arr = [8, 3, 12, 5, 1, 9, 20];
console.log(minmax(arr));


