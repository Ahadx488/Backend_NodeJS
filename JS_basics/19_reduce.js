const nums = [1, 2, 3]
const total =nums.reduce( function (acc, curr){
    console.log(`acc is:${acc} and curr is:${curr}`)
    return curr+acc
},0)

// acc is:0 and curr is:1
// acc is:1 and curr is:2
// acc is:3 and curr is:3


console.log(total) // 6


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay); // 22996