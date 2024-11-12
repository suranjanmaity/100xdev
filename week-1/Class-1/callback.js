function sum(num1, num2, fnToCall) {
    let result = num1 + num2;
    fnToCall(result);
}

function displayResult(data) {
    console.log("Result of the sum is : " + data);
    return data;
}

function displayResultPassive(data) {
    console.log("Sum's result is : " + data);
}

const ans = sum(3, 5, displayResult);