const lodash = require('lodash')

const name = ['abdul' , 'ahad', 'momin'];
const capitalize =lodash.map(name, lodash.capitalize) 
console.log(capitalize)