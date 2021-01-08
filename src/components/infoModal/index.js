import React from "react";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { FaInfoCircle } from "react-icons/fa";

export default function Info() {
  const renderTooltip = (props) => (
    <Tooltip {...props}>
      <div>Valoración: </div>
      <div>Max clientes: </div>
    </Tooltip>
  );

  return (
    <div className="infoModal">
      <OverlayTrigger placement="bottom" overlay={renderTooltip}>
        <FaInfoCircle size={28} />
      </OverlayTrigger>
    </div>
  );
}
