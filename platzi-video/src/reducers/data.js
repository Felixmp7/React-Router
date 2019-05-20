import schema from '../schemas'
import { fromJS } from 'immutable'
import { SEARCH_VIDEO } from '../actions/types'

const initialState = fromJS({
  entities: schema.entities,
  categories: schema.result.categories,
  search: '',
})

function data(state = initialState,action){
  switch (action.type) {
    case SEARCH_VIDEO: {
      return state.set('search', action.payload.query)
      /*
        Al haber transformado el estado en un mapa, puedo hacer como que seteo el state
        directamente state.set() y lo que va a hacer es sacar una copia automatica para crear
        un nuevo estado inmutable
      */
    }
    default: return state
  }
}

export default data

/*
Resumen de métodos básicos de immutableJS sobre un mapa (objeto mapeado).

mapa.get('key'): Obtiene el valor de ‘key’ en el mapa.

mapa.getIn(['key','sub-key']): Obtiene el valor de ‘sub-key’, que es un mapa
hijo (de segundo nivel) asociado a ‘key’ en el mapa original.

mapa.set('key','valor'): Retorna un nuevo mapa donde el valor de ‘key’ ha
sido remplazado por ‘valor’.

mapa.merge({key1:'valor1',key2:'valor2'}): Retorna un nuevo mapa que es el
resultado de mezclar (consolidar) el mapa original y el mapa pasado por
parametro como objeto.
*/
