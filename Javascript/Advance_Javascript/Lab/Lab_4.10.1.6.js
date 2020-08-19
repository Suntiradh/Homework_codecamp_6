let arr1 = [
    { name: "apple", age: 14 },
    { name: "banana", age: 18 },
    { name: "watermelon", age: 32 },
  ]
;

let arr2 = arr1.map(function(x) {
  return  x.age;
});
console.log(arr2);