let array1 = [
    { name: "apple", birth: "2001-01-01" },
    { name: "banana", birth: "1990-10-10" },
    { name: "watermelon", birth: "1985-12-30" },
    { name: "peach", birth: "2002-10-13" },
];

let array2 = array1.filter((x) => {
    let moonLanding = new Date(x.birth);
    let v = moonLanding.getMonth() + 1
    return (v == 10);
});

console.log(array2);