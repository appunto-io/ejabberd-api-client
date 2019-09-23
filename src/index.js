const axios = require('axios');
const camelCase = require('lodash.camelcase');
const commands = require('./commands.js');

class Client {
  constructor(hostname = 'localhost', port = 5443) {
    this.hostname = hostname;
    this.port     = port;

    Object.entries(commands).forEach(([command, description]) => {
      this[camelCase(command)] = (...args) => {
        const callArguments = {};

        (description.arguments || []).forEach(
          (name, position) => callArguments[name] = args[position]
        );

        return this.__call(command, callArguments);
      }
    });
  }

  __call(command, data = {}) {
    const json = JSON.stringify(data);

    return axios({
      method : 'post',
      url    : `https://${this.hostname}:${this.port}/api/${command}`,
      data,
      headers : {
        'Content-Type'   : 'application/json',
        'Content-Length' : json.length
      },
      timeout : 1000
    })
    .then(
      response => response.data
    );
  }
}


module.exports = Client;
