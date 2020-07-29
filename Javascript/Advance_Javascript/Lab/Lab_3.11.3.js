function sumInput() {

    let nums = [];
    while (1) {
        let value = prompt("Enter your number");
        if (value === null || value === "" || !isFinite(value))
            break;
        nums.push(+value);
    }
    let sum = 0;
    for (let num of nums) {
        sum += num;
    }
    return sum;
}

alert(sumInput());