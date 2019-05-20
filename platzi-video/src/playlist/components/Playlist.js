import React from 'react'
// import Media from './Media'
import MediaContainer from '../containers/MediaContainer'
import './playlist.css'

const Playlist = props => {
  return (
        <div className="Playlist">
          {
            props.playlist.map( mediaId => {
              return (
                <MediaContainer
                  id={mediaId}
                  key={mediaId}
                  openModal={props.handleOpenModal}
                />
              )
            })
          }
        </div>
  )
}

export default Playlist;
