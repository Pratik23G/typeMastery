import React from "react";

export const Hello = () => {
  //   return (
  //     <div>
  //       <h1> Hello Pratik</h1>
  //     </div>
  //   );
  return React.createElement(
    "div",
    { id: "hello", className: "dummyClass" },
    React.createElement("h1", null, "Hello Pratik"),
  );
};

//React uses what we embedding
//  expression rule where the {} braces gives Jsx
//  power to add any valid Js expression into visual layout

const userName = "PRATIKG23";

<h1> Hello {userName} </h1>;

//in react it is simply this

export const CallUser = () => {
  return React.createElement("h1", null, "Hello !! ", userName);
};

//Another rule is that a Js function cannot return 2 values at once
// if siblings collide we use what we call react Fragment <> </>
const hasLoggedIn = true;
export const CheckStatus = () => {
  if (hasLoggedIn) {
    return (
      <>
        <h3>Hello </h3>
        <p> Welcome back, {userName}</p>
      </>
    );
  }
  return (
    <h2>Unable to vaerify you Tray again later! {userName} is invalid Name</h2>
  );
};

//now the above fragment condition can be further tuned using ternary operator as Js
// JSX uses ternary operator to hide elements on fly

const checkStatus = false;

export const HasCheckedStatus = () => {
  return (
    <div>
      {!checkStatus ? (
        <p> Hey {userName} what is in your mind today!</p>
      ) : (
        <p> {userName} session has Logged out Login in again </p>
      )}
    </div>
  );
};
