

// function that takes an array of numbers and returns a new array with unique numbers only.



function uniqueNumber(arr) {
    let uniqueNum = [];
    let checkedNum = [];

    for (var i = 0; i < arr.length; i++) {
        if (!checkedNum[arr[i]]) {
            uniqueNum.push(arr[i]);
            checkedNum[arr[i]] = true;
        }
    }

    return uniqueNum;
}

const numbers = [10,7,79,7,55,23,55,8,98,8];
console.log(uniqueNumber(numbers));
