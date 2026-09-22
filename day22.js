/* 
We will continue callback and promises exercises in Javascript

*/

const userHasLoggedOut = true;

const userLikedPost = false;

function instagramDoomScroll() {
  return new Promise((resolve, reject) => {
    if (userHasLoggedOut) {
      reject({
        userName: "User has logged off",
        messageSent: " ",
      });
    } else if (!userLikedPost) {
      reject({
        userName: "User cannot like needs to log in",
        messageSent: "Unable to like the post, failed request",
      });
    } else {
      resolve("User is now logged in and can interact with the posts");
    }
  });
}

instagramDoomScroll()
  .then((messageSent) => {
    console.log("Success: " + messageSent);
  })
  .catch((errorMessage) => {
    console.log(errorMessage.userName + " " + errorMessage.messageSent);
  });
