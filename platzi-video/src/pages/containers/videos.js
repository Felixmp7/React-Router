import React, { Component } from 'react'
import { connect } from 'react-redux'
import { List as list } from 'immutable'
import HomeLayout from '../components/home-layout'
import Categories from '../../categories/components/Categories'
import Related from '../components/Related'
import ModalContainer from '../../widgets/containers/Modal'
import Modal from '../../widgets/components/Modal'
import HandlError from '../../error/containers/Handle-Error'
import VideoPlayer from '../../player/containers/video-player'
import * as actions from '../../actions'
import { bindActionCreators } from 'redux'

class Videos extends Component {
  handleOpenModal = id => {
    this.props.actions.openModal(id)
  }

  handleCloseModal = event => {
    this.props.actions.closeModal()
  }
  componentDidMount(){
    const search = this.props.location.search
    if (search) {
      const id = search.split('=')[1] //El método split corta, le estoy diciendo que
      // corte en donde está el '=' y que conserve lo que queda en la posicion [1] de
      // ese array
      console.log(search);
      console.log('posicion 0',id);
      this.handleOpenModal(id)
    }
  }
  render(){
    return(
      <HandlError>
        <HomeLayout>
        <Related/>
        <Categories
          categories={this.props.categories}
          handleOpenModal={this.handleOpenModal}
          search={this.props.search}
          isLoading={this.props.isLoading}
        />
        {
          this.props.modal.get('visibility') &&
          <ModalContainer>
            <Modal
              handleClick={this.handleCloseModal}
            >
              <h1>Contenido del Modal</h1>
              <VideoPlayer
                autoplay
                id={this.props.modal.get('mediaID')}
                // src={this.state.media.src}
                // title={this.state.media.title}
              />
            </Modal>
          </ModalContainer>
        }
        </HomeLayout>
      </HandlError>
    )
  }
}
function mapStateToProps(state, props){
  const categories = state.get('data').get('categories').map( categoryID => {
    return state.get('data').get('entities').get('categories').get(categoryID)
  })
  let searchResults = list()
  const search = state.get('data').get('search')
  if (search) {
    const mediaList = state.get('data').get('entities').get('media')
    searchResults = mediaList.filter(item => {
      return item.get('author').toLowerCase().includes(search.toLowerCase())
    }).toList()
  }
  return {
    categories,
    search: searchResults,
    modal: state.get('modal'),
    isLoading: state.get('isLoading').get('active')
    // En ésta función tengo que devolver que datos quiero enviarle
    // Al componente (home) como nuevas propiedades
  }
}

function mapDispatchToProps(dispatch){
  return {
    // actions: bindActionCreators(acciones, dispatch)
    actions: bindActionCreators(actions, dispatch)
  }
  //En ésta funcion lo que hago es bindear mis acciones como props para no tener
  // que utilizar this.props.dispatch() sino manejar las acciones desde las props
}
export default connect(mapStateToProps, mapDispatchToProps)(Videos)
