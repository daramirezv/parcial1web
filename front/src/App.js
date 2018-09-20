import React, { Component } from 'react';
import vegaEmbed from 'vega-embed';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      municipios: [
        { dane: 40, departamento: "antionquita", municipio: "santa rosa de oso" }
      ]
    };
  }

  componentDidMount() {
   
  }


  render() {
    var yourVlSpec = {
      "$schema": "https://vega.github.io/schema/vega-lite/v2.0.json",
      "description": "A simple bar chart with embedded data.",
      "data": { "url": "data/cars.json" },
      "mark": "point",
      "encoding": {
        "x": { "field": "Horsepower", "type": "quantitative" },
        "y": { "field": "Miles_per_Gallon", "type": "quantitative" }
      }
    }

    this.componentDidMount()
    {
      vegaEmbed(this.vid2, yourVlSpec)
      .then((res) =>  res.view.insert("myData", myData).run())
    }

    return (
      <div className="App">
        <textarea
          cols="40"
          rows="20"
          ref={(div) => this.divTarget = div}>
        </textarea>

        <button onClick={() => {
          var obj = {
            x: "John"
          };

          this.divTarget.value = JSON.stringify(obj, null, 2);
        }}>Cambio</button>

        <div ref={(div) => this.vid2 = div}></div>
      </div>
    );
  }
}

export default App;
