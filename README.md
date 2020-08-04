# Filter Items
A simple and easy to use method to filter desired items from the list

## Installation
npm install @cka1o1/filter-items

## Usage
Arguments:
1. List (supports single variable array as well)
2. value to be filtered
3. default attribute ( default value is id)

Returns: 
List of matched items 
````
import filterItems from '@cka1o1/filter-items'

const demoList = [
    { id: 1, title: 'Apple', category: 'fruits'},
    { id: 4, title: 'Carrot', category: 'vegetables' },
    { id: 3, title: 'Banana', category: 'fruits' }
];
                 
console.log("filteredItems: "filterItems(demoList, 'vegetables', 'category'))

// filteredItems [ { id: 4, title: 'Carrot', category: 'vegetables' } ]
