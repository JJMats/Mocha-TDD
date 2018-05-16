const Calculate = {
  factorial(valueToFactor) {
  	var result = 1;
    if (valueToFactor === 0) {
      return 1;
    }
    
    for (var i = valueToFactor; i > 0; i--) {
      result *= i;
    }
    
    return result;
	}
}

module.exports = Calculate;


