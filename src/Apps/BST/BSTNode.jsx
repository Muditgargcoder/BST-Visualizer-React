import React, { useEffect, useRef, useState } from "react";
import Xarrow, {useXarrow} from "react-xarrows";

function BSTNode(props) {
  var node = props.node;
  const updateXarrow = useXarrow();
  const curRef = useRef(null);
  if (!node) return <div style={{ height: 20, width: 20, flex: 0.5 }}></div>;

  return (
    <div
      style={{ display: "flex", flexDirection: "column", padding: "50px 30px",
        // transition: "all 0.5s ease-in-out",
        flex: node.nodeWidth,
      }}
    >
      <div className="contain">
        <div ref={curRef} className="node contain">
          {node.data}
        </div>
      </div>
      <div style={{ display: "flex" }}>
        <BSTNode node={node.left} parentRef={curRef} />
        <BSTNode node={node.right} parentRef={curRef} />
      </div>

      {props.parentRef && (
        <Xarrow
          start={props.parentRef} //can be react ref
          end={curRef} //or an id
          strokeWidth={2}
          path="smooth"
        />
      )}
    </div>
  );
}

export default BSTNode;

// import React, { useEffect, useState } from "react";

// const gap = 14

// function BSTNode(props) {
//   var node = props.node;
//   var depth = props.depth;
//   if(!node) return null;
//   return (
//     <div style={{marginLeft: depth}}>
//       <div>
//         <BSTNode node={node.right} depth={depth + gap}/>
//       </div>
//       {node.data}
//       <div>
//         <BSTNode node={node.left} depth={depth + gap}/>
//       </div>
//     </div>
//   );
// }

// export default BSTNode;
