import React, { PureComponent } from 'react';
import './generic-page.css';

class NotFound extends PureComponent {
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
