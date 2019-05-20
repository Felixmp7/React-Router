import React from 'react'
import FSIcon from '../../icons/components/FullScreen'
import './FullScreen.css'

const FullScreen = props => (
  <div className="FullScreen" onClick={props.handleFullClick}>
    <FSIcon
      color="white"
      size={25}
    />
  </div>
)

export default FullScreen
