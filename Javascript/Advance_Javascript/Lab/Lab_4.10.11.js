let array1 = [
    { name: "apple", birth: "2000-01-01" },
    { name: "banana", birth: "1990-10-01" },
    { name: "watermelon", birth: "1985-12-01" },
]
    ;
let array2 = array1.map( (x, k) => ( { ...x, age: ( new Date().getFullYear() ) - ( new Date(array1[k].birth).getFullYear() ) } ) )

console.log(array2);