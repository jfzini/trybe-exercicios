const { expect } = require('chai');
const {
  readData,
  // addNewData,
  // updateData,
  // deleteData,
} = require('../../src/utils/fsUtils');

describe('testing readData', () => {
  it('should return an array', async () => {
    const data = await readData('./data/staff.json');
    expect(data).to.be.an('array');
  });
});