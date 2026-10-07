export const MyButton = () => {
  function handleClick() {
    alert("You clicked Here hehe!!");
  }

  return <button onClick={handleClick}>Click Click</button>;
};
