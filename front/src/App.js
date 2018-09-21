import React, { Component } from 'react';
import vegaEmbed from 'vega-embed';
import Papa from 'papaparse';
import './App.css';
import Visualizaciones from './Visualizaciones';
import Formulario from './Formulario';

class App extends Component {
  constructor(props) {
    super(props);
    this.state =
      {
        myData: [
          { "a": "A", "b": 100 }, { "a": "B", "b": 100 }, { "a": "C", "b": 100 },
          { "a": "D", "b": 100 }, { "a": "E", "b": 100 }, { "a": "F", "b": 100 },
          { "a": "G", "b": 100 }, { "a": "H", "b": 100 }, { "a": "I", "b": 100 }
        ],
        myData2: [

          
            {"a": "A","b": 28}, {"a": "B","b": 55}, {"a": "C","b": 43},
            {"a": "D","b": 91}, {"a": "E","b": 81}, {"a": "F","b": 53},
            {"a": "G","b": 19}, {"a": "H","b": 87}, {"a": "I","b": 52}
          
        ],
        visual: false,
        formulario: false
      };
    this.cargarJson = this.cargarJson.bind(this);
    this.papaSubir = this.papaSubir.bind(this);
    this.verVisuales = this.verVisuales.bind(this);
    this.verFormulario = this.verFormulario.bind(this);
  }

  verVisuales() {
    if (!this.state.visual)
      this.setState({ visual: true })
    else
      this.setState({ visual: false })
  }

  verFormulario() {
    if (!this.state.formulario)
      this.setState({ formulario: true })
    else
      this.setState({ formulario: false })
  }

  componentDidMount() {

    var spec = {
      "$schema": "https://vega.github.io/schema/vega-lite/v2.json",
      "description": "A simple bar chart with embedded data.",
      "data": {
        "name": "myData"
      },
      "mark": "bar",
      "encoding": {
        "y": { "field": "a", "type": "ordinal" },
        "x": { "field": "b", "type": "quantitative" }
      }
    }
    
    const view = vegaEmbed(this.divTarget, spec)
      .catch(error => console.log(error))
      .then((res) => res.view.insert("myData", this.state.myData).run());
  }

  componentDidUpdate() {
    var spec = {
      "$schema": "https://vega.github.io/schema/vega-lite/v2.json",
      "description": "A simple bar chart with embedded data.",
      "data": {
        "name": "myData"
      },
      "mark": "bar",
      "encoding": {
        "y": { "field": "a", "type": "ordinal" },
        "x": { "field": "b", "type": "quantitative" }
      }
    }

    const view = vegaEmbed(this.divTarget, spec)
      .catch(error => console.log(error))
      .then((res) => res.view.insert("myData", this.state.myData).run());
  }

  cargarJson() {
    try {
      this.setState({ myData: JSON.parse(this.divXD.value) });
    } catch (e) {
      //PONER UN ALERT AQUI
      console.log(e);
    }
  }

  //Este metodo se llama cuando se hace submit del archivo CSV
  papaSubir() {
    var arreglo;
    var tamano;
    Papa.parse(this.inputCarga.files[0], {
      complete: function (results) {
        arreglo = results.data;
        tamano = arreglo.length;

        for (let i = 0; i < tamano; i++) {
          arreglo[i].b = parseInt(arreglo[i].b);
        }

        try {
          this.setState({ myData: arreglo });
        } catch (e) {
          //PONER UN ALERT AQUI
          console.log(e);
        }
      }.bind(this),
      header: true
    });
  }

  render() {

    return (
      <div className="container">

        {/*Es el text area donde va el archivo JSON*/}
        <textarea
          cols="40"
          rows="20"
          ref={(div) => this.divXD = div}>
        </textarea>

        {/*Boton que carga el JSON escrito dentro del textarea*/}
        <button onClick={this.cargarJson}>Cargar JSON</button>

        {/*Boton que busca el FILE en los archivos del usuario*/}
        <input ref={(inp) => this.inputCarga = inp} type="file" id="file" name="file" multiple />

        {/*Boton que carga el FILE seleccionado*/}
        <button onClick={this.papaSubir}>Submit</button>

        {/*Aqui se va a cargar la grafica*/}
        <div ref={(div) => this.divTarget = div}></div>
        <button onClick={this.verFormulario}>Agregar</button>
        {this.state.formulario ? <Formulario myData={this.state.myData} /> : null}

        <button onClick={this.verVisuales}>Visualizaciones</button>
        {this.state.visual ? <Visualizaciones /> : null}

      </div>
    );
  }
}

export default App;
