const mocha = require('mocha');
const chai = require('chai');
const should = chai.should;

const handler = require('./handler');

describe("Handler function", () => {
  it("returns msg", ()=>{
    handler.hello(undefined, undefined, function(error, response) {
      let body = JSON.parse(response.body);
      body.message.should.be.equal('Go serverless v1.0! Function executed successfully.');
    }
  })
});
