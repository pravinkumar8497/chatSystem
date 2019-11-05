
// Configure the Feathers services. (Can be re-generated.)
let contact = require('./contact/contact.service');
let group = require('./group/group.service');
let user = require('./user/user.service');

// !code: imports // !end
// !code: init // !end

// eslint-disable-next-line no-unused-vars
let moduleExports = function (app) {
  app.configure(contact);
  app.configure(group);
  app.configure(user);
  // !code: func_return // !end
};

// !code: exports // !end
module.exports = moduleExports;

// !code: funcs // !end
// !code: end // !end
