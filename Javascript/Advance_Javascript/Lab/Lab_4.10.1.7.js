let arr1 = [
    { name: "apple", surname: "London" },
    { name: "banana", surname: "Bangkok" },
    { name: "watermelon", surname: "Singapore" },
  ]
;

let arr2 = arr1.map(function(x) {
  return  x.name + " " + x.surname;
});
console.log(arr2)