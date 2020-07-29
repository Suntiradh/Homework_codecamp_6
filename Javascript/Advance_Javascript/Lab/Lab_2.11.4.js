function extractCurrencyValue(string, rate) {
    return +string.slice(1)*rate;
  } 
  alert( extractCurrencyValue('$120', 30.5) === 3660 );