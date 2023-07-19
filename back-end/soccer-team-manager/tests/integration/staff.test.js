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

const expectedSingleOutput = {
  id: 'f874272e-6b5c-45e5-9f23-372909876183',
  name: 'João Felipe Zini',
  position: 'Software Engineer',
  email: 'joaofelipezini@gmail.com',
  phone: '+55 31 99679-7756',
  status: 'available',
};

const newMember = {
  name: 'Maria Vitória Zini',
  position: 'Software Engineer',
  email: 'mvzini@gmail.com',
  phone: '+55 31 99679-7756',
  status: 'available',
};

describe('testing /staff routes', function () {
  describe('testing GET /staff', function () {
    beforeEach(function () {
      sinon.stub(fs, 'readFile').resolves(JSON.stringify(mockStaffData));
    });

    afterEach(function () {
      sinon.restore();
    });

    it('should return an array with all staff data on /staff', async function () {
      const response = await chai.request(app).get('/staff');
      expect(response.status).to.be.equal(200);

      expect(response.body).to.be.an('array');
      expect(response.body).to.have.lengthOf(5);
      expect(response.body).to.deep.equal(mockStaffData);
    });

    it('should return an object with the data of the respective staff member on /staff/:id', async function () {
      const response = await chai.request(app).get('/staff/f874272e-6b5c-45e5-9f23-372909876183');

      expect(response.status).to.be.equal(200);

      expect(response.body).to.deep.equal(expectedSingleOutput);
    });

    it('should return a 400 error if the ID informed is not an UUID', async function () {
      const response = await chai.request(app).get('/staff/123456789');

      expect(response.status).to.be.equal(400);

      expect(response.body).to.deep.equal({ message: 'O ID informado precisa ser um UUID' });
    });

    it('should return a 404 error if the staff member is not found', async function () {
      const response = await chai.request(app).get('/staff/d984272e-6b5c-45e5-9f23-372909856659');

      expect(response.status).to.be.equal(404);

      expect(response.body).to.deep.equal({ message: 'Funcionário não encontrado' });
    });
  });

  describe('testing POST /staff', function () {
    beforeEach(function () {
      sinon.stub(fs, 'writeFile').resolves();
    });

    afterEach(function () {
      sinon.restore();
    });

    it('should add a new staff member on /staff', async function () {
      const response = await chai.request(app).post('/staff').send(newMember);

      expect(response.status).to.be.equal(201);
      expect(response.body).to.haveOwnProperty('id');

      expect(fs.writeFile.calledOnce).to.be.true;
    });

    it('should return 400 if request body is missing a required field', async function () {
      const incompleteNewMember = {
        name: 'Maria Vitória Zini',
        position: 'Software Engineer',
        phone: '+55 31 99679-7756',
        status: 'available',
      };

      const response = await chai.request(app).post('/staff').send(incompleteNewMember);

      expect(response.status).to.be.equal(400);
      expect(response.body).to.deep.equal({ message: 'Todos os campos são obrigatórios' });
    });
  });

  describe('testing PUT /staff', function () {
    beforeEach(function () {
      sinon.stub(fs, 'readFile').resolves(JSON.stringify(mockStaffData));
      sinon.stub(fs, 'writeFile').resolves();
    });

    afterEach(function () {
      sinon.restore();
    });

    it('should update a staff member on /staff/:id', async function () {
      const response = await chai
        .request(app)
        .put('/staff/241116f0-56b1-4754-82ff-47e19d7b9866')
        .send(newMember);

        expect(response.body).to.deep.equal({
          id: '241116f0-56b1-4754-82ff-47e19d7b9866',
          ...newMember,
        });
        expect(response.status).to.be.equal(200);
    });
  });
});
