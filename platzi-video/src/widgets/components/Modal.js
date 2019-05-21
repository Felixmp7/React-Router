import React from 'react'
import './Modal.css'
import {Link} from 'react-router-dom'

const Modal = props => {
  return(
    <div className="Modal">
      {props.children}
      <Link
        to={{
          pathname: '/videos',
          state: {
            modal: false
          }
        }}
        >
        <button
          className="Modal-close"
          onClick={props.handleClick}
        />
      </Link>
    </div>
  )
}

export default Modal
