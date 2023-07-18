const { expect } = require('chai');
const fs = require('fs').promises;
const sinon = require('sinon');

const {
  readData,
  // addNewData,
  // updateData,
  // deleteData,
} = require('../../src/utils/fsUtils');
const mockStaffData = require('../mocks/mockStaff');


describe('testing readData', function () {
  it('should return an array', async function () {
    sinon.stub(fs, 'readFile').resolves(JSON.stringify(mockStaffData));

    const data = await readData('./data/staff.json');
    expect(data).to.be.an('array');
    expect(data).to.have.lengthOf(5);

    sinon.restore();
  });
});