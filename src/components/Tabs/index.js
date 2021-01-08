import React, { Component } from "react";
import { Nav, NavItem, NavLink } from "react-bootstrap";

export class Tabs extends Component {
  constructor(props, context) {
		super(props, context);
		this.state = {
			key: 'resultados', 
    };
  }

  render() {
    return (
      <div className="tabsBlock">
        <Nav activeKey={this.state.key}
				      onSelect={key => this.setState({ key })} variant="tabs">
          <NavItem>
            <NavLink eventKey="resultados" href="/resultados">Entrenadores</NavLink>
          </NavItem>
          <NavItem>
            <NavLink eventKey="valoracion" href="/valoracion">Valoración del Conjunto</NavLink>
          </NavItem>
        </Nav>
      </div>
    );
  }
}

export default Tabs;
