var assert = require("assert");
var Calculate =  require('../index.js')

describe('Calculate', () => {
  describe('.factorial', () => {
		it('calculates the output of 5! to be equal to 120', () => {
      //Setup
      const expectedResult = 120;
      const valueToFactor = 5;
      
      //Exercise
      var result = Calculate.factorial(valueToFactor);
      
      //Verify
      assert.equal(result, expectedResult);
    })
    
    it('calculates the output of 4! to be equal to 24', () => {
      //Setup
      const expectedResult = 24;
      const valueToFactor = 4;
      
      //Exercise
      var result = Calculate.factorial(valueToFactor);
      
      //Verify
      assert.equal(result, expectedResult);
    })
    
    it('calculates the output of 0! to be equal to 1', () => {
      //Setup
      const expectedResult = 1;
      const valueToFactor = 0;
      
      //Exercise
      var result = Calculate.factorial(valueToFactor);
      
      //Verify
      assert.equal(result, expectedResult);
    })
  });
});