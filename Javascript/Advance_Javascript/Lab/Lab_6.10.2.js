function aclean(arr) {
    let obj = {};
  
    for (let i = 0; i < arr.length; i++) {
      let s = arr[i].toLowerCase().split("").sort().join("");
      obj[s] = arr[i];
    }
  
    return Object.values(obj);
  }
  
  let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
  
  alert( aclean(arr) );