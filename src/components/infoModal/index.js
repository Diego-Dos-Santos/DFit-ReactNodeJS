import React from "react";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { FaInfoCircle } from "react-icons/fa";

export default function Info(props) {
  const renderTooltip = (style) => (
    <Tooltip {...style}>
      {console.log(props)}
      <div>Valoración: {props.trainer.rep}</div>
      <div>Max clientes: {props.trainer.disp}</div>
    </Tooltip> 
  );

  return (
    
    <div className="infoModal">
      <OverlayTrigger placement="bottom" trainer={props.trainer} overlay={renderTooltip}>
        <FaInfoCircle size={28} />
      </OverlayTrigger>
    </div>
  );
}
