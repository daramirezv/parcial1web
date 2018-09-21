import React, { Component } from 'react';
import './App.css';

class Formulario extends Component {
    constructor(props) {
        super(props);
        this.ingresar = this.ingresar.bind(this);
    }

    ingresar() {
        const nombre = document.getElementById("nombreinput").value;
        const titulo = document.getElementById("tituloinput").value;
        const timestamp = + new Date();

        fetch("/postVisual?nombre=" + nombre + "&titulo=" + titulo + "&timestamp=" + timestamp + "&myData=" + JSON.stringify(this.props.myData), {
            method: "POST"
        }).then(console.log("done"));
        console.log("done");
        window.location.reload();
    }

    render() {

        return (
            <div className="container">
                <form>
                    <div className="form-group">
                        <label>Nombre</label>
                        <input type="text" className="form-control" id="nombreinput" placeholder="Nombre" />
                    </div>
                    <div className="form-group">
                        <label>Titulo</label>
                        <input type="text" className="form-control" id="tituloinput" placeholder="Titulo" />
                    </div>
                    <button type="button" className="btn btn-primary" onClick={this.ingresar}>Submit</button>
                </form>
            </div>
        )
    }
}

export default Formulario;
