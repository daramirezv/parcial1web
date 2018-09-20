import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state ={
      municipios:[
      {dane:40, departamento: "antionquita", municipio:"santa rosa de oso"}
      ]
    };
  }

  componentDidMount(){
    fetch("/getData")
    .then((response) => {return response.json();})
    .then((json)=> this.setState({municipios:json}))
    .catch((err) => console.log(err));
  }

  renderMunicipios()
  {
    return this.state.municipios.map((muni) => 
    <div key = {muni.dane}>{muni.departamento} - {muni.municipio}</div>
    );
  }

  render() {
    return (
      <div className="App">
        <h1>Consulta Anticorrupcion</h1>

        {this.renderMunicipios()}
      </div>
    );
  }
}

export default App;
