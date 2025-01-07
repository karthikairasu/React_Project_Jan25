import React, { useState, useContext } from "react";

let CounterContext = React.createContext({ count: 0 });

export default function GrandParent() {
  const [data, setData] = useState(10);
  return (
    <CounterContext.Provider
      value={{
        count: data,
        increment: () => {
          setData(data + 1);
        },
      }}
    >
      <Parent />
    </CounterContext.Provider>
  );
}

function Parent() {
  return (
    <CounterContext.Provider value={{ count: 100 }}>
      <div>
        <Child />
        <AnotherChild />
      </div>
    </CounterContext.Provider>
  );
}

// 1.Using <CounterContext.Consumer>
// function Child() {
//   return (
//     <CounterContext.Consumer>
//       {value => (
//         <div>
//           <h3>Count : {value.count}</h3>
//         </div>
//       )}
//     </CounterContext.Consumer>
//   );
// }

function Child() {
  const ctx = useContext(CounterContext);
  return (
    <div>
      <h3>Count : {ctx.count}</h3>
      <button
        className="btn btn-outline-primary"
        // onClick={() => ctx?.increment()}
      >
        ++
      </button>
    </div>
  );
}

function AnotherChild() {
  const ctx = useContext(CounterContext);
  return (
    <div>
      <h3>(Another Child) Count : {ctx.count}</h3>
    </div>
  );
}
