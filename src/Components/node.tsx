import * as React from "react";
import "../css/node.css";

export interface NodeProps {
  _id: string;
  selected: string;
  onClick: (_id: string) => boolean;
}

const Node: React.SFC<NodeProps> = (props) => {
  return (
    <td className="grid-node" onClick={() => props.onClick(props._id)}>
      {props.selected === "x" && <div>x</div>}
      {props.selected === "o" && <div>o</div>}
    </td>
  );
};

export default Node;
