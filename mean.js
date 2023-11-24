

//function to find the mean of given array.

    function findMeanValue(arr){

        const sum  = arr.reduce((a,b) => a+b, 0);
        const mean = sum/arr.length;
        result = console.log(mean);
        return result;
    }

    const number = [1,34,43,65, 23];
    findMeanValue(number);