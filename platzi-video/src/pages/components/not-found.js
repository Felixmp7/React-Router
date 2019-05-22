import React, { PureComponent } from 'react';
import './generic-page.css';

class NotFound extends PureComponent {
  handleForwardClick = () => {
    this.props.history.goForward()
  }
  handleBackClick = () => {
    // this.props.history.goBack()
    this.props.history.go(-1) //Recibe cuantas posiciones quiero moverme
    //Positivas hacia adelante, negativas hacia atrás
  }
  handleRandomClick = () => {
    // Para ir a una ruta en especifico, puedo utilizar el método push
    const random = Math.round(Math.random() * (10 - 1) + 1)
    this.props.history.push(`/videos?id=${random}`)
  }
  render() {
    return (
      <div className="Page NotFound">
        <h1>404</h1>
        <h3 className="SadFace">:(</h3>
        <h2>No hemos encontrado la página que buscabas</h2>
        <button onClick={this.handleForwardClick} className="Button">Ir a la siguiente pagina</button>
        <button onClick={this.handleBackClick} className="Button">Ir a la pagina anterior</button>
        <button onClick={this.handleRandomClick} className="Button">Video Random</button>
      </div>
    )
  }
}

export default NotFound
