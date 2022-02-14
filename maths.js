function sortArray(array){
    for(var i = 0; i<array.length-1;i++){
        for (var j = i+1; j < array.length; j++){
            if (array[i]>array[j]){
                var temp = array [i];
                array[i]=array[j];
                array[j] =temp;
            }
        }
    }

return array;
}

function divisibles(arr){
    var sum=0;
    for (var q = 0; q<arr.length; q++){
        if (arr[q]%5===0){
            sum=sum+arr[q];
        }
    }
    return sum
}

function printArray(arr){
    for(var q = 0; q<arr.length;q++){
        console.log(arr[q]);
    }
}

let array1 = [0,0,55,23,11,65,500,100,20,43,32,22,1];

var x = sortArray(array1);
console.log("The sum is: "+divisibles(x));
printArray(x);