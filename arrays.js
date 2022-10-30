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

function removeat(arr, idx) {
    var val = arr[idx];
    for (var i = idx; i < arr.length; i++) {
        arr[i] = arr[i+1];
    }
    arr.length = arr.length-1;
    return val;
}
console.log(removeat([1,2,3,4,5], 2));

function swappairs(arr) {
    for (var i = 0; i < arr.length; i+=2) {
        var temp = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = temp;
    }
    return arr;
}   
console.log(swappairs([1,2,3,4,5]));

function removevals(arr, start, end) {
    for (var i = start; i < arr.length; i++) {
        arr[i] = arr[i+end-start+1];
    }
    arr.length = arr.length-(end-start+1);
    return arr;
}
console.log(removevals([1,2,3,4,5,6,7,8,9,10], 2, 5));

