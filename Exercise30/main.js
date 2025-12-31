

function operate(a,b, callback) {
    return callback(a,b)
}

function multiply(a,b) {
    return a*b
}

function divide(a,b) {
    return a/b
}

console.log("multiplication " , operate(4,5 , multiply))

console.log("divide" , operate(20,4 , divide))