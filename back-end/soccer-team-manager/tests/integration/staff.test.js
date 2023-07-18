// modules
const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');
const fs = require('fs').promises;

// internal files/functions
const mockStaffData = require('../mocks/mockStaff');
const app = require('../../src/app');

const { expect } = chai;

chai.use(chaiHttp);

describe('testing /staff routes', function () {
  describe('testing GET /staff', function () {
    beforeEach(function () {
      sinon.stub(fs, 'readFile').resolves(JSON.stringify(mockStaffData));
    });

    afterEach(function () {
      sinon.restore();
    });

    const expectedSingleOutput = {
      id: 'f874272e-6b5c-45e5-9f23-372909876183',
      name: 'João Felipe Zini',
      position: 'Software Engineer',
      email: 'joaofelipezini@gmail.com',
      phone: '+55 31 99679-7756',
      status: 'available',
    };

    it('should return an array with all staff data on /staff', async function () {
      const response = await chai.request(app).get('/staff');
      expect(response.status).to.be.equal(200);

      expect(response.body).to.be.an('array');
      expect(response.body).to.have.lengthOf(5);
      expect(response.body).to.deep.equal(mockStaffData);
    });

    it('should return an object with the data of the respective staff member on /staff/:id', async function () {
      const response = await chai
        .request(app)
        .get('/staff/f874272e-6b5c-45e5-9f23-372909876183');

      expect(response.status).to.be.equal(200);

      expect(response.body).to.deep.equal(expectedSingleOutput);
    });

    it('should return a 404 error if the staff member is not found on /staff/:id', async function () {
      const response = await chai.request(app).get('/staff/123456789');

      expect(response.status).to.be.equal(404);

      expect(response.body).to.deep.equal({ message: 'Funcionário não encontrado' });
    });
  });

  describe('testing POST /staff', function () {
    it('should add a new staff member on /staff', async function () {
      const writeFileStub = sinon.stub(fs, 'writeFile').resolves();

      const newMember = {
        name: 'Maria Vitória Zini',
        position: 'Software Engineer',
        email: 'joaofelipezini@gmail.com',
        phone: '+55 31 99679-7756',
        status: 'available',
      };

      const response = await chai.request(app).post('/staff').send(newMember);

      expect(response.status).to.be.equal(201);
      expect(response.body).to.haveOwnProperty('id');

      expect(writeFileStub.calledOnce).to.be.true;
      sinon.restore();
    });
  });
});
