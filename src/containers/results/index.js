import React, { Component } from "react";

import "./styles.css";

import perfil from "../../perfil.png";
import Info from "../../components/infoModal/index";
import Tabs from "../../components/Tabs";

export class Results extends Component {
  constructor(props) {
    super(props);

    this.state = { results: [] };
  }

  componentDidMount() {
    const data = localStorage.getItem("data");
    const dataParse = JSON.parse(data);

    this.setState({ results: dataParse });
  }

  render() {
    const results = this.state.results;

    console.log(results);

    return (
      <div className="mainBlock">
        <Tabs />
        <div className="resultsContainer">
          {results.map((result) => (
            <div className="resultsBlock" key={result._id}>
              <div className="resultsBlock__header">
                <div className="resultsBlock__title">{result.title}</div>
                <Info />
              </div>
              <div className="resultsBlock__clients">
                <div className="resultsBlock__image">
                  <img src={perfil} alt="perfil" />
                </div>
                <div className="resultsBlock__main">
                  <div className="resultsBlock__name">{result.name}</div>
                  <div className="resultsBlock__list">
                    <p>Clientes asignados:</p>
                    <p>- Cliente {result.client[0][0]}</p>
                  </div>
                </div>
              </div>
              <div className="resultsBlock__counter">
                <p>{result.client.length} clientes asignados</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Results;
