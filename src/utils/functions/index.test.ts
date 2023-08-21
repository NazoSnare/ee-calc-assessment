import {decimalFormatter, sum} from '.';

describe('decimalFormatter function', () => {
  it('should return a string of the same number if no decimals',() => {
    const answer = decimalFormatter(300);
    expect(answer).toBe('300');
  });
  
  it('should return a string with one decimalFormatter',() => {
    const answer = decimalFormatter('300.54.87');
    expect(answer).toBe('300.5487');
  });

});


describe('sum function', () => {
   it('should be able to add two numbers',() =>{
    const answer = sum(2,3);
    expect(answer).toBe(5);
   });

   it('should be able to add more than 2 numbers',() =>{
    const answer = sum(2,3,5);
    expect(answer).toBe(10);
   });

   it('should be able to add 1 number to 0',() =>{
    const answer = sum(2);
    expect(answer).toBe(2);
   });

});


// describe('division function', () => {

//   it('should be able to divide 2 numbers ',() =>{
//     const answer = division(10,2);
//     expect(answer).toBe(5);
//    });

//   it('should be able to divide a number by itself',() =>{
//     const answer = division(2,2);
//     expect(answer).toBe(1);
//    });
// });



