import React, { useState } from "react";

export default function Counter() {
  //   const [counter, setCounter] = useState(0);
  //   const [age, setAge] = useState(18);

  const [mystate, setMyState] = useState({ counter: 0, age: 18 });

  return (
    <div>
      <h2>Count : {mystate.counter}</h2>
      <button
        className="btn btn-primary"
        onClick={() => setMyState({ ...mystate, counter: mystate.counter + 1 })}
      >
        Counter++
      </button>

      <hr />
      <h2>Age : {mystate.age}</h2>
      <button
        className="btn btn-primary"
        onClick={() => setMyState({ ...mystate, age: mystate.age + 10 })}
      >
        Age++
      </button>
    </div>
  );
}
