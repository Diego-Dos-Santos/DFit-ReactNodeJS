import React, { Component } from 'react';
import { Link }from 'react-router-dom';
import { Button } from 'react-bootstrap';
import OpenModal from '../../components/Modal/index'

import "./styles.css";

export class Trainers extends Component {
   constructor() {
       super()
   
       this.state = {trainers:[]}

   }

   componentDidMount(){
        fetch("http://localhost:8080/load").then(res =>
            res.json().then(data => {
              console.log("trainers", JSON.stringify(data, null, 4));
              
              this.setState({ trainers: data.trainers })

              console.log(this.state.trainers)

            })
        );
    }
    
    render(){

        const trainers = this.state.trainers;

        return (
            <div className="trainersContainer">
                {trainers.map(trainer => (
                    <div className="trainersBlock" key={trainer._id}>
                        <h2 className="trainersBlock__title">{trainer.title}</h2>
                        <div className="trainersBlock__info">
                            <div className="trainersBlock__name">Nombre <span><input placeholder={trainer.name}></input></span></div>
                            <div className="trainersBlock__assessment">Valoración <span><input placeholder={trainer.rep}></input></span></div>
                            <div className="trainersBlock__freeplaces">Maximo número de clientes <span><input placeholder={trainer.disp}></input></span></div>
                        </div>
                  </div>
                ))}

                <div class="container-trainers__buttons">
                    <OpenModal />
                    <Link to="/resultados"><Button className="verResultados" variant="primary">Calcular resultados</Button>{' '}</Link> 
                </div>
            </div>
        )   
    }
}