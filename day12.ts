/* 

Today we are learning more about the return type of functions with type
annotations after parameter list

*/

function getFavoriteNumber(): number {
  return 23;
}

//unlike regular functions in promises funtions in Typescript
// will return promise but we need Promise type

async function getNumberEven(): Promise<number> {
  return 25;
}

//now unlike the regular function which directly gives 25
// in Tsc promises takes and gives promise first with
// number describing return type and it can be either
// fulfilled or rejected
