let fruit = prompt("Enter fruit name: ");
let obj = {};

while (fruit !== "stop") {
    let value = prompt(`Enter the number of ${fruit}`)
    if (Number(value) > 1) {
        fruit = fruit + "s";
    }
    obj[fruit] = value;
    fruit = prompt("Enter fruit name: ");
}

console.log(obj);