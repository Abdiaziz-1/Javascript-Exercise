


// Task: Implement a simple blocking function that simulates a delay of 2 seconds before returning a message. Then, implement a non-blocking version of the same function using setTimeout.


function delayBlock() {
    alert("fetching data");

    return "delaying block is completed"
}

console.log("start blocking the delay")
console.log(delayBlock());
console.log("the result is blocked untill the delay is completed")




function delayNonBlocking(callback) {
    setTimeout( () => {
        callback("non-blocking delay are completed")
    }, 4000)
}

console.log("start the non-blocking deleay");
delayNonBlocking((message) => {
    console.log(message)
});

console.log("this message runs immediately")







