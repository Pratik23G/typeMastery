import { useState } from "react";

function HelloResponse() {
  const [hello, setHello] = useState(false);

  return (
    <div>
      <h5>Hey wanna see some magic trick!!</h5>
      <button
        classNme={hello ? "Hiii" : "Byeee"}
        onClick={() => setHello((prev) => !prev)}
      >
        {hello ? "Hi User this amazing " : "Byee see you Later"}
      </button>
    </div>
  );
}

export default HelloResponse;
