const calc = require('./calculator.js') //require file where function is available
//our jest method that contains multiple tests
describe('check the different operators of our calculator', () => {

//test 1 - When passes 3 and 5 with a '+' it should return 8
it('should return 2 added numbers', () => {
    expect(calc(3,5,'+')).toBe(8);
});

//test 2 - When passes 5 and 3 with a '-' it should return 2
it('should return 2 subtracted numbers', () => {
    expect(calc(5,3,'-')).toBe(2);
});

//test 3 - When passes 5 and 3 with a '*' it should return 15
it('should return 2 multiplied numbers', () => {
    expect(calc(5,3,'*')).toBe(15);
});

//test 4 - When passes 9 and 3 with a '/' it should return 3
it('should return 2 divided numbers', () => {
    expect(calc(9,3,'/')).toBe(3);
});

});