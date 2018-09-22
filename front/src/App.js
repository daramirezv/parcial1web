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
        //valores por defecto
        myData: [
          { 'a': 'A', 'b': 100 }, { 'a': 'B', 'b': 100 }, { 'a': 'C', 'b': 100 },
          { 'a': 'D', 'b': 100 }, { 'a': 'E', 'b': 100 }, { 'a': 'F', 'b': 100 },
          { 'a': 'G', 'b': 100 }, { 'a': 'H', 'b': 100 }, { 'a': 'I', 'b': 100 }
        ],
        //La recomendacion que se le da al usuario
        myData2: [

          { 'a': 'A', 'b': 28 }, { 'a': 'B', 'b': 55 }, { 'a': 'C', 'b': 43 },
          { 'a': 'D', 'b': 91 }, { 'a': 'E', 'b': 81 }, { 'a': 'F', 'b': 53 },
          { 'a': 'G', 'b': 19 }, { 'a': 'H', 'b': 87 }, { 'a': 'I', 'b': 52 }

        ],
        visual: false,
        formulario: false
      };
    this.cargarJson = this.cargarJson.bind(this);
    this.papaSubir = this.papaSubir.bind(this);
    this.verVisuales = this.verVisuales.bind(this);
    this.verFormulario = this.verFormulario.bind(this);
  }

  //Esto hace que se pueda ver las 20 visualizaciones.
  verVisuales() {
    if (!this.state.visual)
      this.setState({ visual: true })
    else
      this.setState({ visual: false })
  }

  //Esto hace que se pueda ver el formulario para registrar una visualizacion en la base de datos.
  verFormulario() {
    if (!this.state.formulario)
      this.setState({ formulario: true })
    else
      this.setState({ formulario: false })
  }

  //se carga cuando el componente finaliza de montar
  componentDidMount() {

    var spec = {
      '$schema': 'https://vega.github.io/schema/vega-lite/v2.json',
      'description': 'A simple bar chart with embedded data.',
      'data': {
        'name': 'myData'
      },
      'mark': 'bar',
      'encoding': {
        'y': { 'field': 'a', 'type': 'ordinal' },
        'x': { 'field': 'b', 'type': 'quantitative' }
      }
    }

    //aqui se genera la grafica de los datos que se tienen
    try {
      const view = vegaEmbed(this.divTarget, spec)
        .catch(error => console.log(error))
        .then((res) => res.view.insert('myData', this.state.myData).run());
    } catch (e) {
      alert('Hubo un problema renderizando el archivo');

    }
  }

  //si se cambio algo en los estados, se vuelve a cargar todo
  componentDidUpdate() {
    var spec = {
      '$schema': 'https://vega.github.io/schema/vega-lite/v2.json',
      'description': 'A simple bar chart with embedded data.',
      'data': {
        'name': 'myData'
      },
      'mark': 'bar',
      'encoding': {
        'y': { 'field': 'a', 'type': 'ordinal' },
        'x': { 'field': 'b', 'type': 'quantitative' }
      }
    }

    try {
      const view = vegaEmbed(this.divTarget, spec)
        .catch(error => console.log(error))
        .then((res) => res.view.insert('myData', this.state.myData).run());
    } catch (e) {
      alert('Hubo un problema renderizando de nuevo la visualizacion');
    }
  }

  //esto intenta guardar el json ingresado en el cuadro de texto
  cargarJson() {
    try {
      this.setState({ myData: JSON.parse(this.divXD.value) });
      alert('Se cargó una visualización usando la entrada JSON')
    } catch (e) {
      alert('Hubo un problema subiendo el archivo json');

    }
  }

  //Este metodo se llama cuando se hace submit del archivo CSV
  papaSubir() {

    try {
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

      alert('Se cargó una visualización usando la entrada csv');

    } catch (e) {
      alert('Hubo un problema subiendo el archivo csv');

    }
  }

  render() {
    var x = this.state.myData2;
    return (
      <div className='container'>

        <h1>Visualizaciones de datos CSV y JSON</h1>
        <p>Este es un proyecto en el cual puedes visualizar graficamente archivos tipo json o csv.</p> <br />
        {/*Es el text area donde va el archivo JSON*/}
        <p>Aquí encuentras un ejemplo del json que debes cargar.</p>
        <div className='card'>
          <div className='card-body'>
            {JSON.stringify(x)}
          </div>
        </div>
        <textarea
          className='texto'
          placeholder='Aqui debes ingresar el JSON que quieres ver, recuerda que debe ser de tipo ordinal y cuantitativo.'
          cols='40'
          rows='10'
          ref={(div) => this.divXD = div}>
        </textarea> <br />

        {/*Boton que carga el JSON escrito dentro del textarea*/}
        <strong><p>Con este botón puedes generar la gráfica del JSON que escribiste arriba</p></strong>
        <button className='btn btn-primary' onClick={this.cargarJson}>Cargar JSON</button> <br />


        {/*Boton que busca el FILE en los archivos del usuario*/}
        <strong><p>Con este botón puedes buscar un archivo CSV para cargar que sea ordinal y cardinal. En la carpeta data del proyecto puedes encontrar uno.</p></strong>
        <input className='inputtexto' ref={(inp) => this.inputCarga = inp} type='file' id='file' name='file' multiple /> <br />

        {/*Boton que carga el FILE seleccionado*/}
        <strong><p>Con este botón puedes subir el archivo CSV seleccionado.</p></strong>
        <button className='btn btn-primary' onClick={this.papaSubir}>Generar</button> <br />

        {/*Aqui se va a cargar la grafica*/}
        <h3>Grafica</h3>
        <div ref={(div) => this.divTarget = div}></div>

        {/*Aqui se va a abrir el formulario para guardar una visualizacion*/}
        <strong><p>Aqui puedes guardar tu visualizacion en la base de datos</p></strong>
        <button className='btn btn-primary' onClick={this.verFormulario}>Guaran en la base de datos</button> <br />
        {this.state.formulario ? <Formulario myData={this.state.myData} /> : null} <br />

        {/*Aqui se van a visualizar las 20 graficas*/}
        <strong><p>Aqui puedes guardar ver las ultimas 20 visualizaciones guardadas</p></strong>
        <button className='btn btn-primary' onClick={this.verVisuales}>Visualizaciones</button> <br />
        {this.state.visual ? <Visualizaciones /> : null} <br />

      </div>
    );
  }
}

export default App;
