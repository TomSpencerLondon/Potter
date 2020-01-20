const { Potter } = require('../src/Potter.js');
describe("Potter", () => {
  describe("price", () => {
    it("1 is 8", () => {
        potter = new Potter();
        expect(potter.price([1])).toEqual(8);
    });
   
    it('3  diff books of 8  ', () => {
      potter = new Potter();
      expect(potter.price([1, 1, 1])).toEqual(19.20);

   })
   it('4  diff books of 8  ', () => {
    potter = new Potter();
    expect(potter.price([1, 1, 1 ,1])).toEqual(25.60);

   })
   it('5  diff books of 8  ', () => {
    potter = new Potter();
    expect(potter.price([1, 1, 1 ,1, 1])).toEqual(32);
 })

  });
});