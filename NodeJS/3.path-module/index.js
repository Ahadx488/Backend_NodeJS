// path module provides utilities for working with file and directory paths in a safe, cross-platform way.
const { log } = require('console')
const path = require('path')
console.log('Directory name is :-',path.dirname(__filename))
console.log('File name is :-', path.basename(__filename) )
console.log('Extension :', path.extname(__filename))

// join ==> Joins paths correctly
const pathJoin=path.join("/user" , "documents", "node" , "vscode" , "file.txt")
console.log(pathJoin)

// resolve ==> Gives an absolute path
console.log(path.resolve("data","file.txt"))