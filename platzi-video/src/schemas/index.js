import api from '../api.json'
import { normalize, schema } from 'normalizr'

// const media = new schema.Entity(key,definicion del esquema, opciones)
const media = new schema.Entity('media',{}, {
  idAttribute: 'id', //Por defecto el toma el key id por defecto
  //  la propiedad idAttribute se utiliza por si nuestro key no se llama 'id'
  processStrategy: (value,parent,key) => ({...value, category: parent.id})
})
const category = new schema.Entity('categories', {
  playlist: new schema.Array(media)
})

const categories = {categories: new schema.Array(category)}

// const normalizeData = normalize(datos iniciales, datos normalizados)
const normalizeData = normalize(api,categories)

export default normalizeData
