const { expect } = require('chai');

const Client = require('../src/index.js');

process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;

describe("registeredUsers", function() {
  it("should retrieve an array", async function() {
    const client = new Client('localhost', 15443);

    let result = await client.registeredUsers('localhost');

    expect(result).to.be.an('array');
  })
})
