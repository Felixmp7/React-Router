import React from 'react'
import Category from './Category'
import './Categories.css'
import SearchContainer from '../../widgets/containers/SearchContainer'
import Media from '../../playlist/components/Media'

const Categories = props => {
  return(
    <div className="Categories">
      <SearchContainer/>
      {
        props.isLoading &&
        <p>Buscando tus videos favoritos...</p>
      }
      {
        props.search.map(item =>{
          // console.log(item);
          return <Media openModal={props.handleOpenModal} key={item.get('id')} {...item.toJS()} />
          //toJS() me transforma el mapa que ahora recibo por immutable en un objeto plano JS
        })
      }
      {
        props.categories.map( item => {
          return (
            <Category
              key={item.get('id')}
              {...item.toJS()}
              handleOpenModal={props.handleOpenModal}
            />
          )
        })
      }
    </div>
  )
}

export default Categories
