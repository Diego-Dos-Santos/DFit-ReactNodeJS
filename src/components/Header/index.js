import React, { Component } from "react";

import "./styles.css";

import { Container, Navbar, NavLink } from "react-bootstrap";
import logo from "../../logo-dudyfit-3.0.png";
import { TimelineLite } from "gsap/all";

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.myTween = new TimelineLite();
    this.myElements = [];
  }

  componentDidMount() {
    this.myTween.from(this.myElements, {
      duration: 0.8,
      opacity: 0,
      y: -20,
      stagger: 0.2,
      delay: 0.5,
    });
  }
  render() {
    return (
      <Navbar
        sticky="top"
        expand="lg"
        variant="light"
        bg="light"
        ref={(div) => (this.myElements = div)}
      >
        <Container>
          <Navbar.Brand href="#" className="logo">
            <NavLink href="/"><img src={logo} alt="Logo" /></NavLink>
          </Navbar.Brand>
        </Container>
      </Navbar>
    );
  }
}
