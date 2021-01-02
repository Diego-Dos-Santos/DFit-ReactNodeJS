import React, { Component } from 'react'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export class Trainers extends Component {
    constructor(props) {
        super(props)
        this.state = {
            trainers: [
                {name: 'Diego', assessment: 4.5, freeplaces: 1},
                {name: 'Bruno', assessment: 3.2, freeplaces: 4},
                {name: 'Jon', assessment: 1.2, freeplaces: 3},
                {name: 'Andre', assessment: 3.4, freeplaces: 2}
              ]
        }
    }
    
    render() {
        const trainers = this.state.trainers

        return (
            <div className="trainersContainer">
                {trainers.map((trainer) => (
                    <div className="trainersBlock" key={trainer._id}>
                        <div className="trainersBlock__name">Nombre <span>{trainer.name}</span></div>
                        <div className="trainersBlock__assessment">Valoración <span>{trainer.assessment}</span></div>
                        <div className="trainersBlock__freeplaces">Maximo número de clientes <span>{trainer.freeplaces}</span></div>
                    </div>
                ))}

            <div class="container-trainers__buttons">
                <button type='button' class='btn tablasClients' data-toggle="modal" data-target="#clientsModal">Ver Tabla de clientes</button>
                <Link to="/resultados"><Button className="verResultados" variant="primary">Resultados</Button>{' '}</Link>  
            </div>
            </div>
        )
    }
}