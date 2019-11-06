const reader = require("xlsx");
const file = reader.readFile("list.xlsx");
const names = file.SheetNames;
console.log(reader.utils.sheet_to_json(file.Sheets[names[0]]));
