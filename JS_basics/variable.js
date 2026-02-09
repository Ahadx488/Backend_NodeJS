const accountId="12345"
let acc_email="ama@gmail.com"
var acc_password="11111"
account_city="beed"  // not preferable to declare any thing without data-type, but we can do ot , it is allowed
let accountstate;

// accontId="2121212" :: not allowed (we cant change or assign to const )

account_city="mumbai"
acc_email="aaa@gamil.com";
acc_password="3131313"
console.log(accountId)
/*
prefer not to use 'var' , use 'let'
because of issue in block scope and functional scope
*/

console.table([accountId, account_city, acc_email, acc_password, accountstate])