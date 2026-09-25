/* 
We are learning about async and await in Js using Bro code tutorial

*/

function walkDog() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const walkedDog = true;

      if (walkedDog) {
        resolve("You walked the dog +1 points");
      } else {
        reject("You did not walk the dog -1 points");
      }
    });
  }, 1500);
}

function cleanKitchen() {
  return new Promise((resolve, reject) => {
    const cleanPoints = true;
    let increasePoints = 0;

    if (cleanPoints) {
      increasePoints += 1;
      resolve(`You cleaned the kitchen nice ${increasePoints}`);
      // increasePoints += 1;
    } else {
      increasePoints = 0;
      reject(`The kitchen is still dirty ${increasePoints}`);
    }
  });
}

async function doChores() {
  const walkDogResolve = await walkDog();
  console.log(walkDogResolve);

  const cleanKitchenResults = await cleanKitchen();
  console.log(cleanKitchenResults);

  console.log("You finished all the chores!!Nice");
}

doChores();
