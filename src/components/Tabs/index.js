import React, { Component } from "react";
import { Nav, NavItem, NavLink } from "react-bootstrap";

export class Tabs extends Component {
  render() {
    return (
      <div className="tabsBlock">
        <Nav variant="tabs" defaultActiveKey="/resultados">
          <NavItem>
            <NavLink href="/resultados">Entrenadores</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/valoracion">Valoración del Conjunto</NavLink>
          </NavItem>
        </Nav>
      </div>
    );
  }
}

export default Tabs;
