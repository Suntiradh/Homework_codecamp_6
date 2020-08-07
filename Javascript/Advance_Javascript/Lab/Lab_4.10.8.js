let array1 = [1,3,4,5,6,7,8];

let array2 = array1.map(function(x) {
        return x % 2 == 0 ? 'even' : 'odd';
});
console.log(array2);