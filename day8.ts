/* 

RTodays learning is Boolean which is true or false



*/

//declaring boolean is easy
export {};
let learningIsTrue: boolean = true;
console.log(learningIsTrue);

let notLearning: boolean = !learningIsTrue;
console.log(notLearning);

let hasError: boolean = false;

//some basic logic operations
//ANd operation &&

let result: boolean = learningIsTrue && hasError;
console.log(result);

//function's also can annotate boolean parameters or return type of a function using
// boolean keyword

function changeStatus(status: unknown): boolean {
  if (typeof status === "boolean") {
    return true;
  } else {
    return false;
  }
}

let boolCheckStatus: boolean = true;

let numberCheckStatus: number = 5;

console.log(changeStatus(boolCheckStatus));

console.log(changeStatus(numberCheckStatus));
