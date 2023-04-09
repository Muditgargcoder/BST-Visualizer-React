import logo from "./logo.svg";
import "./App.css";
import { useEffect, useMemo, useRef, useState } from "react";
import BSTNode from "./Apps/BST/BSTNode";
import Node from "./Apps/BST/DS";
import OK from "./Apps/BST/OK";
import { Xwrapper } from "react-xarrows";

function App() {
  const numRef = useRef();
  var root = useMemo(() => new Node(), []);
  const [count, setcount] = useState(0);

  const addToBST = (val) => {
    root.add(val);
    setcount((count) => count + 1);
  };

  return (
    <div className="App">
      <div className="contain form">
        <input ref={numRef} type="number" />
        <button onClick={() => addToBST(numRef.current.value)}>Add</button>
      </div>

      <button onClick={() => addToBST(10)}>10</button>
      <button onClick={() => addToBST(20)}>20</button>
      <button onClick={() => addToBST(15)}>15</button>
      <button onClick={() => addToBST(30)}>30</button>
      <button onClick={() => addToBST(5)}>5</button>
      <button onClick={() => addToBST(4)}>4</button>
      <button onClick={() => addToBST(7)}>7</button>
      <div style={{ height: 10 }}></div>

      <Xwrapper>
        <BSTNode node={root} depth={5} />
      </Xwrapper>
      {/* {count} */}
      {/* <OK/> */}
    </div>
  );
}

export default App;
