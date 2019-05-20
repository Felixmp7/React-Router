import data from '../schemas'
import { fromJS } from 'immutable'
import { OPEN_MODAL, CLOSE_MODAL } from '../actions/types'

const initialState = fromJS({
  visibility: false,
  mediaID: null,
})
function modal(state = initialState,action){
  switch (action.type) {
    case OPEN_MODAL:
      return state.merge({
        visibility: true,
        mediaID: action.payload.mediaID
      })
    case CLOSE_MODAL:
      return state.set('visibility', false)
    default:
      return state
  }
}

export default modal
