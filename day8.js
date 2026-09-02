/*

RTodays learning is Boolean which is true or false



*/
let learningIsTrue = true;
console.log(learningIsTrue);
let notLearning = !learningIsTrue;
console.log(notLearning);
let hasError = false;
//some basic logic operations
//ANd operation &&
let result = learningIsTrue && hasError;
console.log(result);
//function's also can annotate boolean parameters or return type of a function using
// boolean keyword
function changeStatus(status) {
    if (typeof status === "boolean") {
        return true;
    }
    else {
        return false;
    }
}
let boolCheckStatus = true;
let numberCheckStatus = 5;
console.log(changeStatus(boolCheckStatus));
console.log(changeStatus(numberCheckStatus));
export {};
