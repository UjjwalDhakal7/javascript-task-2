


// function that takes an array of strings and transforms it into an object which has string as property and index as value.



function transformArray(arr) {
  return arr.reduce((obj, str) => {
    obj[str] = str.length;
    return obj;
  }, {});
}


const fname = ["Angel", "Rama", "Davidddddd"]
const result = transformArray(fname);
console.log(result);