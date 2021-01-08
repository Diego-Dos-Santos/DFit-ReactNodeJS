import React, { Component } from "react";
import { Button } from "react-bootstrap";
import OpenModal from "../../components/Modal/index";

import "./styles.css";

export class Trainers extends Component {
  constructor() {
    super();

    this.state = { trainers: [], client: {} };
  }

  componentDidMount() {
    fetch("http://localhost:8080/load").then((res) =>
      res.json().then((data) => {
        console.log("trainers", JSON.stringify(data, null, 4));

        this.setState({ trainers: data.trainers, client: data.clients });
      })
    );
  }

  updateState = (e) => {
    const info = e.target.name.split(" "); // ME DEVULEVE EL NOMBRE CON EL INDICE, Y DIVIDIMOS EL NOMBRE DEL INDICE

    const newList = [...this.state.trainers]; // CÓPIA DE LA LISTA DE LOS ENTRENADORES

    newList[parseInt(info[1])][info[0]] = e.target.value; // REASIGNAR UN NUEVO VALOR OBTENIENDO CON LA POSICIÓN DE LA LISTA Y CON LA CLAVE DE LA LISTA

    this.setState({ ...this.state, trainers: newList }); // SETEAMOS EL ESTADO CON LA NUEVA LISTA
  };

  calculateResults(trainer) {
    fetch("http://localhost:8080/calculate", {
      method: "POST",
      body: JSON.stringify(trainer),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((response) => {
        const dataJson = JSON.stringify(response);
        localStorage.setItem("data", dataJson);
        this.props.history.push("/resultados");
      })
      .catch((error) => console.error("Error:", error));
  }

  render() {
    const trainers = this.state.trainers;
    const state = this.state;

    return (
      <form className="trainersContainer" onChange={this.updateState}>
        {trainers.map((trainer, index) => (
          <div className="trainersBlock" key={trainer._id}>
            <h2 className="trainersBlock__title">{trainer.title}</h2>
            <div className="trainersBlock__info">
              <div className="trainersBlock__name">
                Nombre{" "}
                <span>
                  <input
                    name={`name ${index}`}
                    placeholder={trainer.name}
                  ></input>
                </span>
              </div>
              <div className="trainersBlock__assessment">
                Valoración{" "}
                <span>
                  <input
                    name={`rep ${index}`}
                    placeholder={trainer.rep}
                  ></input>
                </span>
              </div>
              <div className="trainersBlock__freeplaces">
                Maximo número de clientes{" "}
                <span>
                  <input
                    name={`disp ${index}`}
                    type="number"
                    min="0"
                    max="10"
                    placeholder={trainer.disp}
                  ></input>
                </span>
              </div>
            </div>
          </div>
        ))}
        <div class="trainersBlock__buttons">
          <OpenModal />
          <Button
            className="verResultados"
            onClick={() => this.calculateResults(state)}
            variant="primary"
          >
            Calcular resultados
          </Button>{" "}
        </div>
      </form>
    );
  }
}
