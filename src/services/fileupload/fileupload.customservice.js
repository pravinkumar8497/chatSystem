// Create the service.
class Service {
  constructor (options) {
    this.Model = options.Model;
  }

 
  create (data, params) {
    const model = this.Model;
    const reader = require("xlsx");
    const file = reader.readFile("/home/ubuntu/Desktop/chatSystem/task2/list.xlsx");
    const names = file.SheetNames;
    const data2 = reader.utils.sheet_to_json(file.Sheets[names[0]]);
    return model.create(data2);
  }
}

module.exports = function init (options) {
  return new Service(options);
};

module.exports.Service = Service;
