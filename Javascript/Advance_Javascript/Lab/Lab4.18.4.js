let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  }

function sum(obj) {
    let totalSalaries = 0;
    for (let key in obj) {
        totalSalaries += obj[key];
    }
    return totalSalaries;
}
