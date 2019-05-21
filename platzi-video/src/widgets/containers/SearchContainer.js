import React, {Component} from 'react'
import {connect} from 'react-redux'
import Search from '../components/Search'
import * as actions from '../../actions'
import { bindActionCreators } from 'redux'

class SearchContainer extends Component {
  state = {
    value: '',
    prompt: false
  }
  handleSubmit = event => {
    event.preventDefault()
    console.log(this.input.value ,'Submit')
    // Disparo de la acción
    // this.props.dispatch({
    //   type: 'SEARCH_VIDEO',
    //   payload: {
    //     query: this.input.value
    //   }
    // })
    this.props.actions.searchAsyncVideo(this.input.value)
  }

  setInputRef = element => {
    this.input = element
  }

  handleInputChange = event => {
    this.setState({
      value: event.target.value,
      prompt: !!(event.target.value.length)
    })
    // console.log(!(event.target.value.length));
    console.log(!!(event.target.value.length));
    console.log(event.target.value.length);
  }
  render() {
    return(
      <Search
        handleSubmit={this.handleSubmit}
        setRef={this.setInputRef}
        handleChange={this.handleInputChange}
        value={this.state.value}
        prompt={this.state.prompt}
      />
    )
  }
}

function mapDispatchToProps(dispatch){
  return{
    actions: bindActionCreators(actions,dispatch)
  }
}

export default connect(null,mapDispatchToProps)(SearchContainer)

// connect nos habilita el método dispatch
