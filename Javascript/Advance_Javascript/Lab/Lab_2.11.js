function ucFirst() {
    let string = prompt('Enter string');
    return  string[0].toUpperCase() + string.slice(1) ;
}

ucFirst();