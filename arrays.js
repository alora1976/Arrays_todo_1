function pushfront(arr, val) {
    for (var i = arr.length; i > 0; i--) {
        arr[i] = arr[i-1];
    }
    arr[0] = val;
    return arr;
}
console.log(pushfront([1,2,3,4,5], 0));

function popfront(arr) {
    var val = arr[0];
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i+1];
    }
    arr.length = arr.length-1;
    return val;
}
console.log(popfront([1,2,3,4,5]));

function insertat(arr, idx, val) {
    for (var i = arr.length; i > idx; i--) {
        arr[i] = arr[i-1];
    }
    arr[idx] = val;
    return arr;
}
console.log(insertat([1,2,3,4,5], 2, 0));
