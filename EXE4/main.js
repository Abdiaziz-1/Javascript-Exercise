function add(product,price) {
    return product + price;
}
let total1 = add(4,5);
let total2 = add(2,6);
let total3 = add(7,7)

console.log(total1)
console.log(total2)
console.log("The total is " + total3)



// using it ass function expression
// laba mar lama declare gareen karo variableka add waayo waxaan u isticmaalnay function declarationka so we have to use another variable name

const add2 = function (product,price) {
    return product + price;
}

let result1 = add2(100,30)
let result2 = add2(40,20)

console.log("The result is " + result1)
console.log(result2)