let salaries = {
    'John': 100,
    'Pete': 300,
    'Mary': 250,
    dean: 400
}

function topSalary(salaries) {
    if (Object.entries(salaries).length === 0) return null;
    let topSal = Math.max(...Object.values(salaries));
    for (key in salaries) {
        if (salaries[key] === topSal) {
            return key;
        }
    }
}

console.log(topSalary(salaries));