let arr1 = [1, "1", 2, {}];

let arr2 = arr1.map(function(x) {
    return typeof(x) + "";
});
console.log(arr2);