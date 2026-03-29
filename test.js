//import {HashMap} from './sc.js';
const HashMap = require('./script.js');
const test =  HashMap();

test.set('apple', 'red')
test.set('banana', 'yellow')
test.set('carrot', 'orange')
test.set('dog', 'brown')
test.set('elephant', 'gray')
test.set('frog', 'green')
test.set('grape', 'purple')
test.set('hat', 'black')
test.set('ice cream', 'white')
test.set('jacket', 'blue')
test.set('kite', 'pink')
test.set('lion', 'golden')

test.set('lion', 'stupid')

test.set('tigger', 'smart')
console.log(test.show())
console.log(test.length())
console.log(test.show().length)
