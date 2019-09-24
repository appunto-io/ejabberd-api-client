const { expect } = require('chai');

const Client = require('../src/index.js');

process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;

const HOSTNAME = 'localhost';
const PORT     = 15443;

before(function() {
  const timestamp = new Date().getTime();

  this.client    = new Client(HOSTNAME, PORT);
  this.username1 = `username_${timestamp}_1`;
  this.username2 = `username_${timestamp}_2`;
})



describe('register', function() {
  it('should allow the registration of new user', async function() {
    let result = await this.client.register(this.username1, 'localhost', 'pass');
  })

  it('should fail on duplicate user', async function() {
    try {
      let result = await this.client.register(this.username1, 'localhost', 'pass');
    }
    catch(error) {
      expect(error.response.data.status).to.equal('error');
    }
  })
})

describe('registeredUsers', function() {
  it('should retrieve an array', async function() {
    let result = await this.client.registeredUsers('localhost');

    expect(result).to.be.an('array');
  })

  it('should retrieve user1 but not user2', async function() {
    let result = await this.client.registeredUsers('localhost');

    expect(result).to.include(this.username1);
    expect(result).not.to.include(this.username2);
  })
})
