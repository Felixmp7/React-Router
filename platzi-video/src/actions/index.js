import {
  OPEN_MODAL,
  CLOSE_MODAL,
  SEARCH_VIDEO,
  SEARCH_ASYNC_VIDEO,
  IS_LOADING
} from './types'

export function openModal(mediaID){
  return {
    type: OPEN_MODAL,
    payload: {
      mediaID
    }
  }
}

export function closeModal(){
  return {
    type: CLOSE_MODAL,
  }
}

export function searchVideo(query){
  return {
    type: SEARCH_VIDEO,
    payload: {
      query
    }
  }
}

export function searchAsyncVideo(query){
  return (dispatch) => {
    dispatch(isLoading(true))
    setTimeout(()=>{
      dispatch(isLoading(false))
      dispatch(searchVideo(query))
    },5000)
  }
}

export function isLoading(value){
  return {
    type: IS_LOADING,
    payload: {
      value
    }
  }
}
