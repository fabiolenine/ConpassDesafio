/*jshint esversion: 6 */

//During the test the env variable is set to test
process.env.NODE_ENV = 'test';

const mongoose = require("mongoose");
const chai     = require('chai');
const chaiHttp = require('chai-http');
const should   = chai.should();
const server   = require('../wsconpass');
const q1       = require('../modules/modelq1');

chai.use(chaiHttp);

describe('/GET /dashboard/v001/usersrubs', () => {
  it('it should GET all the users rubs', (done) => {
    chai.request(server)
    .get('/dashboard/v001/usersrubs')
    .end((err, res) => {
      res.should.have.status(200);
      res.body.should.be.a('array');
      res.body.length.should.be.eql(7386);
      done();
    });
  });
});

describe('/GET /dashboard/v001/usersflowend', () => {
  it('it should GET all the user flows end', (done) => {
    chai.request(server)
    .get('//GET /dashboard/v001/usersflowend')
    .end((err, res) => {
      res.should.have.status(200);
      res.body.should.be.a('array');
      res.body.length.should.be.eql(404);
      done();
    });
  });
});

describe('/GET /dashboard/v001/flowsstart', () => {
  it('it should GET all the flows start', (done) => {
    chai.request(server)
    .get('/dashboard/v001/flowsstart')
    .end((err, res) => {
      res.should.have.status(200);
      res.body.should.be.a('array');
      res.body.length.should.be.eql(465);
      done();
    });
  });
});

describe('/GET /dashboard/v001/flowsend', () => {
  it('it should GET all the flows end', (done) => {
    chai.request(server)
    .get('/dashboard/v001/flowsend')
    .end((err, res) => {
      res.should.have.status(200);
      res.body.should.be.a('array');
      res.body.length.should.be.eql(465);
      done();
    });
  });
});
