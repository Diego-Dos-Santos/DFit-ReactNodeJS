import React, { Component } from "react";

import "./styles.css";

import Tabs from "../../components/Tabs";

export class Review extends Component {
  render() {
    return (
      <div className="valoracionTabs">
        <Tabs />
        <div className="valoracionBlock">
          <div className="valoracionBlock__satisfacion">
            <h2>ÍNDICE DE SATISFACCIÓN</h2>

            <span>
              El índice de satisfacción de los clientes ha sido medido por la
              exigencia del personal. Es decir, cuanto más alta es la reputación
              del entrenador, más exigente sería él con el cliente.
            </span>
          </div>
          <div className="valoracionBlock__calc">
            <h2>CÁLCULO</h2>

            <span>
              En primer lugar, se ha creado una variable llamada "list" para
              sacar la relación entre los clientes y los entrenadores. A
              continuación, se han creado dos maps: uno para los entrenadores y
              otro para los clientes. Se empezó con un condicional para
              posicionar los valores mayores ponerlos en un Array. Seguidamente,
              se ha creado una function que ha servido para cruzar los datos.
              Para hacer las asignaciones se han extraído los elementos,
              seleccionando los que tienen mayor reputación (entrenadores y
              clientes) creando un nuevo objeto de clientes y entrenadores y
              relacionando el entrenador con mayor valoracion y el cliente que
              tenia más importancia de valoración. Entonces, limitamos el número
              de clientes por la disponibilidad. En el caso de que no hubiese
              disponibilidad, se saltaría al inmediatamente siguiente con
              valoración. La function se detiene cuando la longitud de los
              entrenadores llega a cero y se retorna la lista final de
              entrenadores y clientes.
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default Review;
