const filterItems = require('./index');
const list = require('./dataSet');

console.log("filteredItems", filterItems(list, 'vegetables', 'category'));

