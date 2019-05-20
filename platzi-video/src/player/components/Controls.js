import React from 'react'
import './Controls.css'

const Controls = props => {
  return (
    <div className="Controls">
      {props.children}
    </div>
  );
}

export default Controls
