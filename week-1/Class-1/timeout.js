function greet(){
    console.log("Hello world");
}
function greetAlien(){
    console.log("Hello alien");
}
setTimeout(greet,3*1000)
setInterval(greetAlien, 1*1000)