//Dependencies
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
//Medias
import './media.css'


class Media extends PureComponent {
  handleClick = event => {
    this.props.openModal(this.props.id)
  }
  render(){
    return(
      <Link>
        <div className="Media" onClick={this.handleClick}>
          <div className="Media-cover">
            <img
              className="Media-image"
              src={this.props.cover}
              alt="bitcoin"
              width={260}
              height={160}
            />
          </div>
          <h3 className="Media-title">{this.props.title}</h3>
          <p className="Media-author">{this.props.author}</p>
        </div>
      </Link>
    )
  }
}

Media.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['video', 'audio'])
}

export default Media;

/*
class MiComponente extends Components{

	--------------------------FASE DE MONTADO--------------------------------
	constructor(){
	Me sirve para bindear elementos o inicializar estados
	}
	componentWillMount(){
    Se ejecuta antes de montar el componente
    Se podría usar para hacer un setState()
	}
	render(){
    Contiene todos los elementos a renderizar
    podrías usarlo para calcular propiedades (ej: concatenar una cadena)
	}
	componentDidMount(){
    Metodo que se llama cuando el componente ya se renderizó,
  	Solo se lanza una vez,
  	Ideal para llamar a una API, hacer un setInteval, etc
	}

	--------------------------FASE DE ACTUALIZACION--------------------------------
	componentWillReceiveProps(){
	 Es llamado cuando el componente recibe nuevas propiedades.

	}
	shouldComponentUpdate(){
  	Ideal para poner una condición y si las propiedades que le llegaron anteriormente
  	 eran las mismas que tenia, retornar false para evitar re-renderear el componente
	}
	componentWillUpdate(){
	 metodo llamado antes de re-renderizar el componente si shouldComponentUpdate devolvió true
	}

	 re-render si es necesario...

	componentDidUpdate(){
	 Método llamado luego del re-render, cuando el componente ya se actualizó
	}

  -------------------------FASE DE SALIDA (DESMONTADO)-------------------------------
	componentWillUnmount(){
	 Método llamado antes de desmontar el componente
	}

  --------------------------------MANEJO DE ERRORES-------------------------------
	componentDidCatch(){
	   Si ocurre algún error, lo capturo desde acá:
	}

}
*/
