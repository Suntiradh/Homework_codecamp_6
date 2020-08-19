let array1 = [
    { name: "apple", birth: "2000-01-01" },
    { name: "banana", birth: "1990-10-10" },
    { name: "watermelon", birth: "1985-12-30" },
]

let array2 = array1.map((x, k) => {
    let date = new Date(array1[k].birth).toUTCString()
    return (`"<tr>
        <td>${x.name}</td> 
        <td>${date.slice(5, 16)}</td>
       </tr>"`)
})

console.log(array2);