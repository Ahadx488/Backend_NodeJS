var word='hi';
var name='raj';
var add=word+name;//output->hiraj;
var spcl=word+ "\""+name+"\""; //output->hi"raj"; back slash ke baad wali cheezo ko compiler ignore kar deta hai aur uske baad wali cheezo ko as it is print kar deta hai;
console.log(add,spcl);
// index of any char in string
var word='helloWorld';

var index=word.indexOf("W");//output->5;
console.log(index);

console.log(word.indexOf("o"));//output->4; gives first occurance
console.log(word.indexOf("x"));//op->-1
console.log(word.indexOf("lo"));//op->3; index of 'l' means first char of 'lo'
//character at any index
console.log(word.charAt(0));//op-> h
console.log(word.charAt(10));//op-> undefined
