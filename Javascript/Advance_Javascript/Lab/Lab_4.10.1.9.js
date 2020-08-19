let array1 = [1, -3, 2, 8, -4, 5];

let array2 = array1.map(function(x) {
       return x < 0 ? x * -1 : x; 
});
console.log(array2);