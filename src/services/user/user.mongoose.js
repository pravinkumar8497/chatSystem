
/* eslint quotes: 0 */
// Defines Mongoose model for service `user`. (Can be re-generated.)
const merge = require('lodash.merge');
// eslint-disable-next-line no-unused-vars
const mongoose = require('mongoose');
// !code: imports // !end
// !code: init // !end

let moduleExports = merge({},
  // !<DEFAULT> code: model
  {
    name: {
      type: String,
      minLength: 3,
      maxLength: 15
    },
    number: {
      type: Number,
      match: "^[0-9]{10}$",
      minLength: 10
    }
  },
  // !end
  // !code: moduleExports // !end
);

// !code: exports // !end
module.exports = moduleExports;

// !code: funcs // !end
// !code: end // !end
