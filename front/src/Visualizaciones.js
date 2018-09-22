import React, { Component } from 'react';
import './App.css';
import vegaEmbed from 'vega-embed';

class Visualizaciones extends Component {
    constructor(props) {
        super(props);
        this.state = { arreglo: [], visible: false };
        this.handleVisible = this.handleVisible.bind(this);
        this.cambiarRating = this.cambiarRating.bind(this);
        this.eliminarVisualizacion = this.eliminarVisualizacion.bind(this);
        this.rerenderizar = this.rerenderizar.bind(this);
    }

    //esto hace que sea visible todos las opciones de modificacion y borrado
    handleVisible() {
        if (!this.state.visible)
            this.setState({ visible: true })
        else
            this.setState({ visible: false })
    }

    //esto intenta borrar un elemento guardado
    eliminarVisualizacion(titulo) {
        try {
            fetch('/deleteVisual?titulo=' + titulo, {
                method: 'DELETE'
            })
                .catch(error => console.log(error))
                .then(console.log('done'));
            console.log('done');
            this.rerenderizar();
            alert('se elimino una visualización');
        } catch (e) {
            alert('Hubo un problema eliminando la visualización');

        }

    }

    //esto cambia el rating de un objeto
    cambiarRating(titulo, rating) {

        try {
            fetch('/putVisual?rating=' + rating + '&titulo=' + titulo, {
                method: 'PUT'
            })
                .catch(error => console.log(error))
                .then(console.log('done'));
            console.log('done');
            this.rerenderizar();

            alert('se cambio el rating');
        } catch (e) {
            alert('hubo un problema cambiando el rating');
        }
    }

    //esto vuelve a cargar todo cuando hayan cambios en la base de datos. Re-renderizando las 20 gráficas
    rerenderizar() {
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
            fetch('/getVisual')
                .then((response) => { return response.json(); })
                .then((json) => {

                    console.log('ZZZ' + json.length);
                    this.setState({ arreglo: json });

                    const view0 = vegaEmbed(this.divvisual0, spec)
                        .catch(error => console.log(error))
                        .then((res) => res.view.insert('myData', JSON.parse(this.state.arreglo[0].myData)).run());
                    const view1 = vegaEmbed(this.divvisual1, spec)
                        .catch(error => console.log(error))
                        .then((res) => res.view.insert('myData', JSON.parse(this.state.arreglo[1].myData)).run());
                    const view2 = vegaEmbed(this.divvisual2, spec)
                        .catch(error => console.log(error))
                        .then((res) => res.view.insert('myData', JSON.parse(this.state.arreglo[2].myData)).run());
                    const view3 = vegaEmbed(this.divvisual3, spec)
                        .catch(error => console.log(error))
                        .then((res) => res.view.insert('myData', JSON.parse(this.state.arreglo[3].myData)).run());
                    const view4 = vegaEmbed(this.divvisual4, spec)
                        .catch(error => console.log(error))
                        .then((res) => res.view.insert('myData', JSON.parse(this.state.arreglo[4].myData)).run());
                    const view5 = vegaEmbed(this.divvisual5, spec)
                        .catch(error => console.log(error))
                        .then((res) => res.view.insert('myData', JSON.parse(this.state.arreglo[5].myData)).run());
                    const view6 = vegaEmbed(this.divvisual6, spec)
                        .catch(error => console.log(error))
                        .then((res) => res.view.insert('myData', JSON.parse(this.state.arreglo[6].myData)).run());
                    const view7 = vegaEmbed(this.divvisual7, spec)
                        .catch(error => console.log(error))
                        .then((res) => res.view.insert('myData', JSON.parse(this.state.arreglo[7].myData)).run());
                    const view8 = vegaEmbed(this.divvisual8, spec)
                        .catch(error => console.log(error))
                        .then((res) => res.view.insert('myData', JSON.parse(this.state.arreglo[8].myData)).run());
                    const view9 = vegaEmbed(this.divvisual9, spec)
                        .catch(error => console.log(error))
                        .then((res) => res.view.insert('myData', JSON.parse(this.state.arreglo[9].myData)).run());
                    const view10 = vegaEmbed(this.divvisual10, spec)
                        .catch(error => console.log(error))
                        .then((res) => res.view.insert('myData', JSON.parse(this.state.arreglo[10].myData)).run());
                    const view11 = vegaEmbed(this.divvisual11, spec)
                        .catch(error => console.log(error))
                        .then((res) => res.view.insert('myData', JSON.parse(this.state.arreglo[11].myData)).run());
                    const view12 = vegaEmbed(this.divvisual12, spec)
                        .catch(error => console.log(error))
                        .then((res) => res.view.insert('myData', JSON.parse(this.state.arreglo[12].myData)).run());
                    const view13 = vegaEmbed(this.divvisual13, spec)
                        .catch(error => console.log(error))
                        .then((res) => res.view.insert('myData', JSON.parse(this.state.arreglo[13].myData)).run());
                    const view14 = vegaEmbed(this.divvisual14, spec)
                        .catch(error => console.log(error))
                        .then((res) => res.view.insert('myData', JSON.parse(this.state.arreglo[14].myData)).run());
                    const view15 = vegaEmbed(this.divvisual15, spec)
                        .catch(error => console.log(error))
                        .then((res) => res.view.insert('myData', JSON.parse(this.state.arreglo[15].myData)).run());
                    const view16 = vegaEmbed(this.divvisual16, spec)
                        .catch(error => console.log(error))
                        .then((res) => res.view.insert('myData', JSON.parse(this.state.arreglo[16].myData)).run());
                    const view17 = vegaEmbed(this.divvisual17, spec)
                        .catch(error => console.log(error))
                        .then((res) => res.view.insert('myData', JSON.parse(this.state.arreglo[17].myData)).run());
                    const view18 = vegaEmbed(this.divvisual18, spec)
                        .catch(error => console.log(error))
                        .then((res) => res.view.insert('myData', JSON.parse(this.state.arreglo[18].myData)).run());
                    const view19 = vegaEmbed(this.divvisual19, spec)
                        .catch(error => console.log(error))
                        .then((res) => res.view.insert('myData', JSON.parse(this.state.arreglo[19].myData)).run());
                });

        } catch (e) {
            alert('Hubo un problema cargando los datos');
        }
    }

    //esto se llama cuando todo montó, generando las 20 gráficas
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

        try {
            fetch('/getVisual')
                .then((response) => { return response.json(); })
                .then((json) => {

                    console.log('ZZZ' + json.length);
                    this.setState({ arreglo: json });

                    const view0 = vegaEmbed(this.divvisual0, spec)
                        .catch(error => console.log(error))
                        .then((res) => res.view.insert('myData', JSON.parse(this.state.arreglo[0].myData)).run());
                    const view1 = vegaEmbed(this.divvisual1, spec)
                        .catch(error => console.log(error))
                        .then((res) => res.view.insert('myData', JSON.parse(this.state.arreglo[1].myData)).run());
                    const view2 = vegaEmbed(this.divvisual2, spec)
                        .catch(error => console.log(error))
                        .then((res) => res.view.insert('myData', JSON.parse(this.state.arreglo[2].myData)).run());
                    const view3 = vegaEmbed(this.divvisual3, spec)
                        .catch(error => console.log(error))
                        .then((res) => res.view.insert('myData', JSON.parse(this.state.arreglo[3].myData)).run());
                    const view4 = vegaEmbed(this.divvisual4, spec)
                        .catch(error => console.log(error))
                        .then((res) => res.view.insert('myData', JSON.parse(this.state.arreglo[4].myData)).run());
                    const view5 = vegaEmbed(this.divvisual5, spec)
                        .catch(error => console.log(error))
                        .then((res) => res.view.insert('myData', JSON.parse(this.state.arreglo[5].myData)).run());
                    const view6 = vegaEmbed(this.divvisual6, spec)
                        .catch(error => console.log(error))
                        .then((res) => res.view.insert('myData', JSON.parse(this.state.arreglo[6].myData)).run());
                    const view7 = vegaEmbed(this.divvisual7, spec)
                        .catch(error => console.log(error))
                        .then((res) => res.view.insert('myData', JSON.parse(this.state.arreglo[7].myData)).run());
                    const view8 = vegaEmbed(this.divvisual8, spec)
                        .catch(error => console.log(error))
                        .then((res) => res.view.insert('myData', JSON.parse(this.state.arreglo[8].myData)).run());
                    const view9 = vegaEmbed(this.divvisual9, spec)
                        .catch(error => console.log(error))
                        .then((res) => res.view.insert('myData', JSON.parse(this.state.arreglo[9].myData)).run());
                    const view10 = vegaEmbed(this.divvisual10, spec)
                        .catch(error => console.log(error))
                        .then((res) => res.view.insert('myData', JSON.parse(this.state.arreglo[10].myData)).run());
                    const view11 = vegaEmbed(this.divvisual11, spec)
                        .catch(error => console.log(error))
                        .then((res) => res.view.insert('myData', JSON.parse(this.state.arreglo[11].myData)).run());
                    const view12 = vegaEmbed(this.divvisual12, spec)
                        .catch(error => console.log(error))
                        .then((res) => res.view.insert('myData', JSON.parse(this.state.arreglo[12].myData)).run());
                    const view13 = vegaEmbed(this.divvisual13, spec)
                        .catch(error => console.log(error))
                        .then((res) => res.view.insert('myData', JSON.parse(this.state.arreglo[13].myData)).run());
                    const view14 = vegaEmbed(this.divvisual14, spec)
                        .catch(error => console.log(error))
                        .then((res) => res.view.insert('myData', JSON.parse(this.state.arreglo[14].myData)).run());
                    const view15 = vegaEmbed(this.divvisual15, spec)
                        .catch(error => console.log(error))
                        .then((res) => res.view.insert('myData', JSON.parse(this.state.arreglo[15].myData)).run());
                    const view16 = vegaEmbed(this.divvisual16, spec)
                        .catch(error => console.log(error))
                        .then((res) => res.view.insert('myData', JSON.parse(this.state.arreglo[16].myData)).run());
                    const view17 = vegaEmbed(this.divvisual17, spec)
                        .catch(error => console.log(error))
                        .then((res) => res.view.insert('myData', JSON.parse(this.state.arreglo[17].myData)).run());
                    const view18 = vegaEmbed(this.divvisual18, spec)
                        .catch(error => console.log(error))
                        .then((res) => res.view.insert('myData', JSON.parse(this.state.arreglo[18].myData)).run());
                    const view19 = vegaEmbed(this.divvisual19, spec)
                        .catch(error => console.log(error))
                        .then((res) => res.view.insert('myData', JSON.parse(this.state.arreglo[19].myData)).run());

                    this.handleVisible();

                });
        } catch (e) {
            alert('Hubo un error cargando los datos');
        }
    }

    render() {

        //aqui se renderizan todas las visualizaciónes
        try {
            return (<div className='container'>
                <h1>visualización1</h1>
                <div ref={(div) => this.divvisual0 = div}></div>
                {this.state.visible ? <div ref={(div) => this.divdatos0 = div}>
                    <h3 className='caracteristicas'>Nombre: </h3>{this.state.arreglo[0].nombre}<br />
                    <h3 className='caracteristicas'>Título: </h3>{this.state.arreglo[0].titulo}<br />
                    <h3 className='caracteristicas'>Timestamp: </h3>{this.state.arreglo[0].timestamp}<br />
                    <h3 className='caracteristicas'>Rating: </h3>{this.state.arreglo[0].rating}<br />
                    <button type='button' className='btn btn-primary' onClick={(x) => this.cambiarRating(this.state.arreglo[0].titulo, 1)}>Dar 1 estrellas</button>
                    <button type='button' className='btn btn-primary' onClick={(x) => this.cambiarRating(this.state.arreglo[0].titulo, 2)}>Dar 2 estrellas</button>
                    <button type='button' className='btn btn-primary' onClick={(x) => this.cambiarRating(this.state.arreglo[0].titulo, 3)}>Dar 3 estrellas</button>
                    <button type='button' className='btn btn-primary' onClick={(x) => this.cambiarRating(this.state.arreglo[0].titulo, 4)}>Dar 4 estrellas</button>
                    <button type='button' className='btn btn-primary' onClick={(x) => this.cambiarRating(this.state.arreglo[0].titulo, 5)}>Dar 5 estrellas</button> <br />
                    <button type='button' className='btn btn-primary' onClick={(x) => this.eliminarVisualizacion(this.state.arreglo[0].titulo)}>Eliminar visualización</button>
                </div> : null}

                <h1>visualización2</h1>

                <div ref={(div) => this.divvisual1 = div}></div>

                {this.state.visible ? <div ref={(div) => this.divdatos1 = div}>
                    <h3 className='caracteristicas'>Nombre: </h3>{this.state.arreglo[1].nombre}<br />
                    <h3 className='caracteristicas'>Título: </h3>{this.state.arreglo[1].titulo}<br />
                    <h3 className='caracteristicas'>Timestamp: </h3>{this.state.arreglo[1].timestamp}<br />
                    <h3 className='caracteristicas'>Rating: </h3>{this.state.arreglo[1].rating}<br />
                    <button type='button' className='btn btn-primary' onClick={(x) => this.cambiarRating(this.state.arreglo[1].titulo, 1)}>Dar 1 estrellas</button>
                    <button type='button' className='btn btn-primary' onClick={(x) => this.cambiarRating(this.state.arreglo[1].titulo, 2)}>Dar 2 estrellas</button>
                    <button type='button' className='btn btn-primary' onClick={(x) => this.cambiarRating(this.state.arreglo[1].titulo, 3)}>Dar 3 estrellas</button>
                    <button type='button' className='btn btn-primary' onClick={(x) => this.cambiarRating(this.state.arreglo[1].titulo, 4)}>Dar 4 estrellas</button>
                    <button type='button' className='btn btn-primary' onClick={(x) => this.cambiarRating(this.state.arreglo[1].titulo, 5)}>Dar 5 estrellas</button> <br />
                    <button type='button' className='btn btn-primary' onClick={(x) => this.eliminarVisualizacion(this.state.arreglo[1].titulo)}>Eliminar visualización</button>
                </div> : null}

                <h1>visualización3</h1>

                <div ref={(div) => this.divvisual2 = div}></div>

                {this.state.visible ? <div ref={(div) => this.divdatos2 = div}>
                    <h3 className='caracteristicas'>Nombre: </h3>{this.state.arreglo[2].nombre}<br />
                    <h3 className='caracteristicas'>Título: </h3>{this.state.arreglo[2].titulo}<br />
                    <h3 className='caracteristicas'>Timestamp: </h3>{this.state.arreglo[2].timestamp}<br />
                    <h3 className='caracteristicas'>Rating: </h3>{this.state.arreglo[2].rating} <br />
                    <button type='button' className='btn btn-primary' onClick={(x) => this.cambiarRating(this.state.arreglo[2].titulo, 1)}>Dar 1 estrellas</button>
                    <button type='button' className='btn btn-primary' onClick={(x) => this.cambiarRating(this.state.arreglo[2].titulo, 2)}>Dar 2 estrellas</button>
                    <button type='button' className='btn btn-primary' onClick={(x) => this.cambiarRating(this.state.arreglo[2].titulo, 3)}>Dar 3 estrellas</button>
                    <button type='button' className='btn btn-primary' onClick={(x) => this.cambiarRating(this.state.arreglo[2].titulo, 4)}>Dar 4 estrellas</button>
                    <button type='button' className='btn btn-primary' onClick={(x) => this.cambiarRating(this.state.arreglo[2].titulo, 5)}>Dar 5 estrellas</button><br />
                    <button type='button' className='btn btn-primary' onClick={(x) => this.eliminarVisualizacion(this.state.arreglo[2].titulo)}>Eliminar visualización</button>
                </div> : null}

                <h1>visualización4</h1>

                <div ref={(div) => this.divvisual3 = div}></div>

                {this.state.visible ? <div ref={(div) => this.divdatos3 = div}>
                    <h3 className='caracteristicas'>Nombre: </h3>{this.state.arreglo[3].nombre}<br />
                    <h3 className='caracteristicas'>Título: </h3>{this.state.arreglo[3].titulo}<br />
                    <h3 className='caracteristicas'>Timestamp: </h3>{this.state.arreglo[3].timestamp}<br />
                    <h3 className='caracteristicas'>Rating: </h3>{this.state.arreglo[3].rating}<br />
                    <button type='button' className='btn btn-primary' onClick={(x) => this.cambiarRating(this.state.arreglo[3].titulo, 1)}>Dar 1 estrellas</button>
                    <button type='button' className='btn btn-primary' onClick={(x) => this.cambiarRating(this.state.arreglo[3].titulo, 2)}>Dar 2 estrellas</button>
                    <button type='button' className='btn btn-primary' onClick={(x) => this.cambiarRating(this.state.arreglo[3].titulo, 3)}>Dar 3 estrellas</button>
                    <button type='button' className='btn btn-primary' onClick={(x) => this.cambiarRating(this.state.arreglo[3].titulo, 4)}>Dar 4 estrellas</button>
                    <button type='button' className='btn btn-primary' onClick={(x) => this.cambiarRating(this.state.arreglo[3].titulo, 5)}>Dar 5 estrellas</button><br />
                    <button type='button' className='btn btn-primary' onClick={(x) => this.eliminarVisualizacion(this.state.arreglo[3].titulo)}>Eliminar visualización</button>
                </div> : null}

                <h1>visualización5</h1>

                <div ref={(div) => this.divvisual4 = div}></div>

                {this.state.visible ? <div ref={(div) => this.divdatos4 = div}>
                    <h3 className='caracteristicas'>Nombre: </h3>{this.state.arreglo[4].nombre}<br />
                    <h3 className='caracteristicas'>Título: </h3>{this.state.arreglo[4].titulo}<br />
                    <h3 className='caracteristicas'>Timestamp: </h3>{this.state.arreglo[4].timestamp}<br />
                    <h3 className='caracteristicas'>Rating: </h3>{this.state.arreglo[4].rating} <br />
                    <button type='button' className='btn btn-primary' onClick={(x) => this.cambiarRating(this.state.arreglo[4].titulo, 1)}>Dar 1 estrellas</button>
                    <button type='button' className='btn btn-primary' onClick={(x) => this.cambiarRating(this.state.arreglo[4].titulo, 2)}>Dar 2 estrellas</button>
                    <button type='button' className='btn btn-primary' onClick={(x) => this.cambiarRating(this.state.arreglo[4].titulo, 3)}>Dar 3 estrellas</button>
                    <button type='button' className='btn btn-primary' onClick={(x) => this.cambiarRating(this.state.arreglo[4].titulo, 4)}>Dar 4 estrellas</button>
                    <button type='button' className='btn btn-primary' onClick={(x) => this.cambiarRating(this.state.arreglo[4].titulo, 5)}>Dar 5 estrellas</button><br />
                    <button type='button' className='btn btn-primary' onClick={(x) => this.eliminarVisualizacion(this.state.arreglo[4].titulo)}>Eliminar visualización</button>
                </div> : null}

                <h1>visualización6</h1>

                <div ref={(div) => this.divvisual5 = div}></div>

                {this.state.visible ? <div ref={(div) => this.divdatos5 = div}>
                    <h3 className='caracteristicas'>Nombre: </h3>{this.state.arreglo[5].nombre}<br />
                    <h3 className='caracteristicas'>Título: </h3>{this.state.arreglo[5].titulo}<br />
                    <h3 className='caracteristicas'>Timestamp: </h3>{this.state.arreglo[5].timestamp}<br />
                    <h3 className='caracteristicas'>Rating: </h3>{this.state.arreglo[5].rating} <br />
                    <button type='button' className='btn btn-primary' onClick={(x) => this.cambiarRating(this.state.arreglo[5].titulo, 1)}>Dar 1 estrellas</button>
                    <button type='button' className='btn btn-primary' onClick={(x) => this.cambiarRating(this.state.arreglo[5].titulo, 2)}>Dar 2 estrellas</button>
                    <button type='button' className='btn btn-primary' onClick={(x) => this.cambiarRating(this.state.arreglo[5].titulo, 3)}>Dar 3 estrellas</button>
                    <button type='button' className='btn btn-primary' onClick={(x) => this.cambiarRating(this.state.arreglo[5].titulo, 4)}>Dar 4 estrellas</button>
                    <button type='button' className='btn btn-primary' onClick={(x) => this.cambiarRating(this.state.arreglo[5].titulo, 5)}>Dar 5 estrellas</button><br />
                    <button type='button' className='btn btn-primary' onClick={(x) => this.eliminarVisualizacion(this.state.arreglo[5].titulo)}>Eliminar visualización</button>
                </div> : null}

                <h1>visualización7</h1>

                <div ref={(div) => this.divvisual6 = div}></div>

                {this.state.visible ? <div ref={(div) => this.divdatos6 = div}>
                    <h3 className='caracteristicas'>Nombre: </h3>{this.state.arreglo[6].nombre}<br />
                    <h3 className='caracteristicas'>Título: </h3>{this.state.arreglo[6].titulo}<br />
                    <h3 className='caracteristicas'>Timestamp: </h3>{this.state.arreglo[6].timestamp}<br />
                    <h3 className='caracteristicas'>Rating: </h3>{this.state.arreglo[6].rating} <br />
                    <button type='button' className='btn btn-primary' onClick={(x) => this.cambiarRating(this.state.arreglo[6].titulo, 1)}>Dar 1 estrellas</button>
                    <button type='button' className='btn btn-primary' onClick={(x) => this.cambiarRating(this.state.arreglo[6].titulo, 2)}>Dar 2 estrellas</button>
                    <button type='button' className='btn btn-primary' onClick={(x) => this.cambiarRating(this.state.arreglo[6].titulo, 3)}>Dar 3 estrellas</button>
                    <button type='button' className='btn btn-primary' onClick={(x) => this.cambiarRating(this.state.arreglo[6].titulo, 4)}>Dar 4 estrellas</button>
                    <button type='button' className='btn btn-primary' onClick={(x) => this.cambiarRating(this.state.arreglo[6].titulo, 5)}>Dar 5 estrellas</button><br />
                    <button type='button' className='btn btn-primary' onClick={(x) => this.eliminarVisualizacion(this.state.arreglo[6].titulo)}>Eliminar visualización</button>
                </div> : null}

                <h1>visualización8</h1>

                <div ref={(div) => this.divvisual7 = div}></div>

                {this.state.visible ? <div ref={(div) => this.divdatos7 = div}>
                    <h3 className='caracteristicas'>Nombre: </h3>{this.state.arreglo[7].nombre}<br />
                    <h3 className='caracteristicas'>Título: </h3>{this.state.arreglo[7].titulo}<br />
                    <h3 className='caracteristicas'>Timestamp: </h3>{this.state.arreglo[7].timestamp}<br />
                    <h3 className='caracteristicas'>Rating: </h3>{this.state.arreglo[7].rating} <br />
                    <button type='button' className='btn btn-primary' onClick={(x) => this.cambiarRating(this.state.arreglo[7].titulo, 1)}>Dar 1 estrellas</button>
                    <button type='button' className='btn btn-primary' onClick={(x) => this.cambiarRating(this.state.arreglo[7].titulo, 2)}>Dar 2 estrellas</button>
                    <button type='button' className='btn btn-primary' onClick={(x) => this.cambiarRating(this.state.arreglo[7].titulo, 3)}>Dar 3 estrellas</button>
                    <button type='button' className='btn btn-primary' onClick={(x) => this.cambiarRating(this.state.arreglo[7].titulo, 4)}>Dar 4 estrellas</button>
                    <button type='button' className='btn btn-primary' onClick={(x) => this.cambiarRating(this.state.arreglo[7].titulo, 5)}>Dar 5 estrellas</button><br />
                    <button type='button' className='btn btn-primary' onClick={(x) => this.eliminarVisualizacion(this.state.arreglo[7].titulo)}>Eliminar visualización</button>
                </div> : null}

                <h1>visualización9</h1>

                <div ref={(div) => this.divvisual8 = div}></div>

                {this.state.visible ? <div ref={(div) => this.divdatos8 = div}>
                    <h3 className='caracteristicas'>Nombre: </h3>{this.state.arreglo[8].nombre}<br />
                    <h3 className='caracteristicas'>Título: </h3>{this.state.arreglo[8].titulo}<br />
                    <h3 className='caracteristicas'>Timestamp: </h3>{this.state.arreglo[8].timestamp}<br />
                    <h3 className='caracteristicas'>Rating: </h3>{this.state.arreglo[8].rating} <br />
                    <button type='button' className='btn btn-primary' onClick={(x) => this.cambiarRating(this.state.arreglo[8].titulo, 1)}>Dar 1 estrellas</button>
                    <button type='button' className='btn btn-primary' onClick={(x) => this.cambiarRating(this.state.arreglo[8].titulo, 2)}>Dar 2 estrellas</button>
                    <button type='button' className='btn btn-primary' onClick={(x) => this.cambiarRating(this.state.arreglo[8].titulo, 3)}>Dar 3 estrellas</button>
                    <button type='button' className='btn btn-primary' onClick={(x) => this.cambiarRating(this.state.arreglo[8].titulo, 4)}>Dar 4 estrellas</button>
                    <button type='button' className='btn btn-primary' onClick={(x) => this.cambiarRating(this.state.arreglo[8].titulo, 5)}>Dar 5 estrellas</button><br />
                    <button type='button' className='btn btn-primary' onClick={(x) => this.eliminarVisualizacion(this.state.arreglo[8].titulo)}>Eliminar visualización</button>
                </div> : null}

                <h1>visualización10</h1>

                <div ref={(div) => this.divvisual9 = div}></div>

                {this.state.visible ? <div ref={(div) => this.divdatos9 = div}>
                    <h3 className='caracteristicas'>Nombre: </h3>{this.state.arreglo[9].nombre}<br />
                    <h3 className='caracteristicas'>Título: </h3>{this.state.arreglo[9].titulo}<br />
                    <h3 className='caracteristicas'>Timestamp: </h3>{this.state.arreglo[9].timestamp}<br />
                    <h3 className='caracteristicas'>Rating: </h3>{this.state.arreglo[9].rating} <br />
                    <button type='button' className='btn btn-primary' onClick={(x) => this.cambiarRating(this.state.arreglo[9].titulo, 1)}>Dar 1 estrellas</button>
                    <button type='button' className='btn btn-primary' onClick={(x) => this.cambiarRating(this.state.arreglo[9].titulo, 2)}>Dar 2 estrellas</button>
                    <button type='button' className='btn btn-primary' onClick={(x) => this.cambiarRating(this.state.arreglo[9].titulo, 3)}>Dar 3 estrellas</button>
                    <button type='button' className='btn btn-primary' onClick={(x) => this.cambiarRating(this.state.arreglo[9].titulo, 4)}>Dar 4 estrellas</button>
                    <button type='button' className='btn btn-primary' onClick={(x) => this.cambiarRating(this.state.arreglo[9].titulo, 5)}>Dar 5 estrellas</button><br />
                    <button type='button' className='btn btn-primary' onClick={(x) => this.eliminarVisualizacion(this.state.arreglo[9].titulo)}>Eliminar visualización</button>
                </div> : null}

                <h1>visualización11</h1>

                <div ref={(div) => this.divvisual10 = div}></div>

                {this.state.visible ? <div ref={(div) => this.divdatos10 = div}>
                    <h3 className='caracteristicas'>Nombre: </h3>{this.state.arreglo[10].nombre}<br />
                    <h3 className='caracteristicas'>Título: </h3>{this.state.arreglo[10].titulo}<br />
                    <h3 className='caracteristicas'>Timestamp: </h3>{this.state.arreglo[10].timestamp}<br />
                    <h3 className='caracteristicas'>Rating: </h3>{this.state.arreglo[10].rating} <br />
                    <button type='button' className='btn btn-primary' onClick={(x) => this.cambiarRating(this.state.arreglo[10].titulo, 1)}>Dar 1 estrellas</button>
                    <button type='button' className='btn btn-primary' onClick={(x) => this.cambiarRating(this.state.arreglo[10].titulo, 2)}>Dar 2 estrellas</button>
                    <button type='button' className='btn btn-primary' onClick={(x) => this.cambiarRating(this.state.arreglo[10].titulo, 3)}>Dar 3 estrellas</button>
                    <button type='button' className='btn btn-primary' onClick={(x) => this.cambiarRating(this.state.arreglo[10].titulo, 4)}>Dar 4 estrellas</button>
                    <button type='button' className='btn btn-primary' onClick={(x) => this.cambiarRating(this.state.arreglo[10].titulo, 5)}>Dar 5 estrellas</button><br />
                    <button type='button' className='btn btn-primary' onClick={(x) => this.eliminarVisualizacion(this.state.arreglo[10].titulo)}>Eliminar visualización</button>
                </div> : null}

                <h1>visualización12</h1>

                <div ref={(div) => this.divvisual11 = div}></div>

                {this.state.visible ? <div ref={(div) => this.divdatos11 = div}>
                    <h3 className='caracteristicas'>Nombre: </h3>{this.state.arreglo[11].nombre}<br />
                    <h3 className='caracteristicas'>Título: </h3>{this.state.arreglo[11].titulo}<br />
                    <h3 className='caracteristicas'>Timestamp: </h3>{this.state.arreglo[11].timestamp}<br />
                    <h3 className='caracteristicas'>Rating: </h3>{this.state.arreglo[11].rating} <br />
                    <button type='button' className='btn btn-primary' onClick={(x) => this.cambiarRating(this.state.arreglo[11].titulo, 1)}>Dar 1 estrellas</button>
                    <button type='button' className='btn btn-primary' onClick={(x) => this.cambiarRating(this.state.arreglo[11].titulo, 2)}>Dar 2 estrellas</button>
                    <button type='button' className='btn btn-primary' onClick={(x) => this.cambiarRating(this.state.arreglo[11].titulo, 3)}>Dar 3 estrellas</button>
                    <button type='button' className='btn btn-primary' onClick={(x) => this.cambiarRating(this.state.arreglo[11].titulo, 4)}>Dar 4 estrellas</button>
                    <button type='button' className='btn btn-primary' onClick={(x) => this.cambiarRating(this.state.arreglo[11].titulo, 5)}>Dar 5 estrellas</button><br />
                    <button type='button' className='btn btn-primary' onClick={(x) => this.eliminarVisualizacion(this.state.arreglo[11].titulo)}>Eliminar visualización</button>
                </div> : null}

                <h1>visualización13</h1>

                <div ref={(div) => this.divvisual12 = div}></div>

                {this.state.visible ? <div ref={(div) => this.divdatos12 = div}>
                    <h3 className='caracteristicas'>Nombre: </h3>{this.state.arreglo[12].nombre}<br />
                    <h3 className='caracteristicas'>Título: </h3>{this.state.arreglo[12].titulo}<br />
                    <h3 className='caracteristicas'>Timestamp: </h3>{this.state.arreglo[12].timestamp}<br />
                    <h3 className='caracteristicas'>Rating: </h3>{this.state.arreglo[12].rating} <br />
                    <button type='button' className='btn btn-primary' onClick={(x) => this.cambiarRating(this.state.arreglo[12].titulo, 1)}>Dar 1 estrellas</button>
                    <button type='button' className='btn btn-primary' onClick={(x) => this.cambiarRating(this.state.arreglo[12].titulo, 2)}>Dar 2 estrellas</button>
                    <button type='button' className='btn btn-primary' onClick={(x) => this.cambiarRating(this.state.arreglo[12].titulo, 3)}>Dar 3 estrellas</button>
                    <button type='button' className='btn btn-primary' onClick={(x) => this.cambiarRating(this.state.arreglo[12].titulo, 4)}>Dar 4 estrellas</button>
                    <button type='button' className='btn btn-primary' onClick={(x) => this.cambiarRating(this.state.arreglo[12].titulo, 5)}>Dar 5 estrellas</button><br />
                    <button type='button' className='btn btn-primary' onClick={(x) => this.eliminarVisualizacion(this.state.arreglo[12].titulo)}>Eliminar visualización</button>
                </div> : null}

                <h1>visualización14</h1>

                <div ref={(div) => this.divvisual13 = div}></div>

                {this.state.visible ? <div ref={(div) => this.divdatos13 = div}>
                    <h3 className='caracteristicas'>Nombre: </h3>{this.state.arreglo[13].nombre}<br />
                    <h3 className='caracteristicas'>Título: </h3>{this.state.arreglo[13].titulo}<br />
                    <h3 className='caracteristicas'>Timestamp: </h3>{this.state.arreglo[13].timestamp}<br />
                    <h3 className='caracteristicas'>Rating: </h3>{this.state.arreglo[13].rating}<br />
                    <button type='button' className='btn btn-primary' onClick={(x) => this.cambiarRating(this.state.arreglo[13].titulo, 1)}>Dar 1 estrellas</button>
                    <button type='button' className='btn btn-primary' onClick={(x) => this.cambiarRating(this.state.arreglo[13].titulo, 2)}>Dar 2 estrellas</button>
                    <button type='button' className='btn btn-primary' onClick={(x) => this.cambiarRating(this.state.arreglo[13].titulo, 3)}>Dar 3 estrellas</button>
                    <button type='button' className='btn btn-primary' onClick={(x) => this.cambiarRating(this.state.arreglo[13].titulo, 4)}>Dar 4 estrellas</button>
                    <button type='button' className='btn btn-primary' onClick={(x) => this.cambiarRating(this.state.arreglo[13].titulo, 5)}>Dar 5 estrellas</button><br />
                    <button type='button' className='btn btn-primary' onClick={(x) => this.eliminarVisualizacion(this.state.arreglo[13].titulo)}>Eliminar visualización</button>
                </div> : null}

                <h1>visualización15</h1>

                <div ref={(div) => this.divvisual14 = div}></div>

                {this.state.visible ? <div ref={(div) => this.divdatos14 = div}>
                    <h3 className='caracteristicas'>Nombre: </h3>{this.state.arreglo[14].nombre}<br />
                    <h3 className='caracteristicas'>Título: </h3>{this.state.arreglo[14].titulo}<br />
                    <h3 className='caracteristicas'>Timestamp: </h3>{this.state.arreglo[14].timestamp}<br />
                    <h3 className='caracteristicas'>Rating: </h3>{this.state.arreglo[14].rating}<br />
                    <button type='button' className='btn btn-primary' onClick={(x) => this.cambiarRating(this.state.arreglo[14].titulo, 1)}>Dar 1 estrellas</button>
                    <button type='button' className='btn btn-primary' onClick={(x) => this.cambiarRating(this.state.arreglo[14].titulo, 2)}>Dar 2 estrellas</button>
                    <button type='button' className='btn btn-primary' onClick={(x) => this.cambiarRating(this.state.arreglo[14].titulo, 3)}>Dar 3 estrellas</button>
                    <button type='button' className='btn btn-primary' onClick={(x) => this.cambiarRating(this.state.arreglo[14].titulo, 4)}>Dar 4 estrellas</button>
                    <button type='button' className='btn btn-primary' onClick={(x) => this.cambiarRating(this.state.arreglo[14].titulo, 5)}>Dar 5 estrellas</button><br />
                    <button type='button' className='btn btn-primary' onClick={(x) => this.eliminarVisualizacion(this.state.arreglo[14].titulo)}>Eliminar visualización</button>
                </div> : null}

                <h1>visualización16</h1>

                <div ref={(div) => this.divvisual15 = div}></div>

                {this.state.visible ? <div ref={(div) => this.divdatos15 = div}>
                    <h3 className='caracteristicas'>Nombre: </h3>{this.state.arreglo[15].nombre}<br />
                    <h3 className='caracteristicas'>Título: </h3>{this.state.arreglo[15].titulo}<br />
                    <h3 className='caracteristicas'>Timestamp: </h3>{this.state.arreglo[15].timestamp}<br />
                    <h3 className='caracteristicas'>Rating: </h3>{this.state.arreglo[15].rating}<br />
                    <button type='button' className='btn btn-primary' onClick={(x) => this.cambiarRating(this.state.arreglo[15].titulo, 1)}>Dar 1 estrellas</button>
                    <button type='button' className='btn btn-primary' onClick={(x) => this.cambiarRating(this.state.arreglo[15].titulo, 2)}>Dar 2 estrellas</button>
                    <button type='button' className='btn btn-primary' onClick={(x) => this.cambiarRating(this.state.arreglo[15].titulo, 3)}>Dar 3 estrellas</button>
                    <button type='button' className='btn btn-primary' onClick={(x) => this.cambiarRating(this.state.arreglo[15].titulo, 4)}>Dar 4 estrellas</button>
                    <button type='button' className='btn btn-primary' onClick={(x) => this.cambiarRating(this.state.arreglo[15].titulo, 5)}>Dar 5 estrellas</button><br />
                    <button type='button' className='btn btn-primary' onClick={(x) => this.eliminarVisualizacion(this.state.arreglo[15].titulo)}>Eliminar visualización</button>
                </div> : null}

                <h1>visualización17</h1>

                <div ref={(div) => this.divvisual16 = div}></div>

                {this.state.visible ? <div ref={(div) => this.divdatos16 = div}>
                    <h3 className='caracteristicas'>Nombre: </h3>{this.state.arreglo[16].nombre}<br />
                    <h3 className='caracteristicas'>Título: </h3>{this.state.arreglo[16].titulo}<br />
                    <h3 className='caracteristicas'>Timestamp: </h3>{this.state.arreglo[16].timestamp}<br />
                    <h3 className='caracteristicas'>Rating: </h3>{this.state.arreglo[16].rating}<br />
                    <button type='button' className='btn btn-primary' onClick={(x) => this.cambiarRating(this.state.arreglo[16].titulo, 1)}>Dar 1 estrellas</button>
                    <button type='button' className='btn btn-primary' onClick={(x) => this.cambiarRating(this.state.arreglo[16].titulo, 2)}>Dar 2 estrellas</button>
                    <button type='button' className='btn btn-primary' onClick={(x) => this.cambiarRating(this.state.arreglo[16].titulo, 3)}>Dar 3 estrellas</button>
                    <button type='button' className='btn btn-primary' onClick={(x) => this.cambiarRating(this.state.arreglo[16].titulo, 4)}>Dar 4 estrellas</button>
                    <button type='button' className='btn btn-primary' onClick={(x) => this.cambiarRating(this.state.arreglo[16].titulo, 5)}>Dar 5 estrellas</button><br />
                    <button type='button' className='btn btn-primary' onClick={(x) => this.eliminarVisualizacion(this.state.arreglo[16].titulo)}>Eliminar visualización</button>
                </div> : null}

                <h1>visualización18</h1>

                <div ref={(div) => this.divvisual17 = div}></div>

                {this.state.visible ? <div ref={(div) => this.divdatos17 = div}>
                    <h3 className='caracteristicas'>Nombre: </h3>{this.state.arreglo[17].nombre}<br />
                    <h3 className='caracteristicas'>Título: </h3>{this.state.arreglo[17].titulo}<br />
                    <h3 className='caracteristicas'>Timestamp: </h3>{this.state.arreglo[17].timestamp}<br />
                    <h3 className='caracteristicas'>Rating: </h3>{this.state.arreglo[17].rating}<br />
                    <button type='button' className='btn btn-primary' onClick={(x) => this.cambiarRating(this.state.arreglo[17].titulo, 1)}>Dar 1 estrellas</button>
                    <button type='button' className='btn btn-primary' onClick={(x) => this.cambiarRating(this.state.arreglo[17].titulo, 2)}>Dar 2 estrellas</button>
                    <button type='button' className='btn btn-primary' onClick={(x) => this.cambiarRating(this.state.arreglo[17].titulo, 3)}>Dar 3 estrellas</button>
                    <button type='button' className='btn btn-primary' onClick={(x) => this.cambiarRating(this.state.arreglo[17].titulo, 4)}>Dar 4 estrellas</button>
                    <button type='button' className='btn btn-primary' onClick={(x) => this.cambiarRating(this.state.arreglo[17].titulo, 5)}>Dar 5 estrellas</button><br />
                    <button type='button' className='btn btn-primary' onClick={(x) => this.eliminarVisualizacion(this.state.arreglo[17].titulo)}>Eliminar visualización</button>
                </div> : null}

                <h1>visualización19</h1>

                <div ref={(div) => this.divvisual18 = div}></div>

                {this.state.visible ? <div ref={(div) => this.divdatos18 = div}>
                    <h3 className='caracteristicas'>Nombre: </h3>{this.state.arreglo[18].nombre}<br />
                    <h3 className='caracteristicas'>Título: </h3>{this.state.arreglo[18].titulo}<br />
                    <h3 className='caracteristicas'>Timestamp: </h3>{this.state.arreglo[18].timestamp}<br />
                    <h3 className='caracteristicas'>Rating: </h3>{this.state.arreglo[18].rating}<br />
                    <button type='button' className='btn btn-primary' onClick={(x) => this.cambiarRating(this.state.arreglo[18].titulo, 1)}>Dar 1 estrellas</button>
                    <button type='button' className='btn btn-primary' onClick={(x) => this.cambiarRating(this.state.arreglo[18].titulo, 2)}>Dar 2 estrellas</button>
                    <button type='button' className='btn btn-primary' onClick={(x) => this.cambiarRating(this.state.arreglo[18].titulo, 3)}>Dar 3 estrellas</button>
                    <button type='button' className='btn btn-primary' onClick={(x) => this.cambiarRating(this.state.arreglo[18].titulo, 4)}>Dar 4 estrellas</button>
                    <button type='button' className='btn btn-primary' onClick={(x) => this.cambiarRating(this.state.arreglo[18].titulo, 5)}>Dar 5 estrellas</button><br />
                    <button type='button' className='btn btn-primary' onClick={(x) => this.eliminarVisualizacion(this.state.arreglo[18].titulo)}>Eliminar visualización</button>
                </div> : null}

                <h1>visualización20</h1>

                <div ref={(div) => this.divvisual19 = div}></div>

                {this.state.visible ? <div ref={(div) => this.divdatos19 = div}>
                    <h3 className='caracteristicas'>Nombre: </h3>{this.state.arreglo[19].nombre}<br />
                    <h3 className='caracteristicas'>Título: </h3>{this.state.arreglo[19].titulo}<br />
                    <h3 className='caracteristicas'>Timestamp: </h3>{this.state.arreglo[19].timestamp}<br />
                    <h3 className='caracteristicas'>Rating: </h3>{this.state.arreglo[19].rating}<br />
                    <button type='button' className='btn btn-primary' onClick={(x) => this.cambiarRating(this.state.arreglo[19].titulo, 1)}>Dar 1 estrellas</button>
                    <button type='button' className='btn btn-primary' onClick={(x) => this.cambiarRating(this.state.arreglo[19].titulo, 2)}>Dar 2 estrellas</button>
                    <button type='button' className='btn btn-primary' onClick={(x) => this.cambiarRating(this.state.arreglo[19].titulo, 3)}>Dar 3 estrellas</button>
                    <button type='button' className='btn btn-primary' onClick={(x) => this.cambiarRating(this.state.arreglo[19].titulo, 4)}>Dar 4 estrellas</button>
                    <button type='button' className='btn btn-primary' onClick={(x) => this.cambiarRating(this.state.arreglo[19].titulo, 5)}>Dar 5 estrellas</button><br />
                    <button type='button' className='btn btn-primary' onClick={(x) => this.eliminarVisualizacion(this.state.arreglo[19].titulo)}>Eliminar visualización</button>
                </div> : null}

            </div>
            )
        } catch (e) {
            alert('Hubo un error cargando las visualizaciónes');
        }
    }
}

export default Visualizaciones;
