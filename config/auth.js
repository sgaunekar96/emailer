'use strict';

module.exports = {
  db: {
    production: "mongodb://localhost/junta",
    development: "mongodb://localhost/junta",
    test: "mongodb://localhost/test",
  },
  mailer: {
    auth: {
      user: 'masked.warrior.m@gmail.com',
      pass: 'gotagotagota',
    },
    defaultFromAddress: 'First Last <masked.warrior.m@gmail.com>'
  }
};
