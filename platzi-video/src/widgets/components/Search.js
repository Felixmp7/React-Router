import React from 'react'
import './Search.css'

const Search = props => (
  <form
    className="Search"
    onSubmit={props.handleSubmit}
  >
    <input
      ref={props.setRef}
      type="text"
      className="Search-input"
      name="search"
      value={props.value}
      onChange={props.handleChange}
    />
  </form>
)

export default Search

/*
Referencias, son la mejor forma de hacer referencia a elementos html dentro
de React

Las referencias nos permiten almacenar en react un elemento HTML

value => Nos permite editar el input a menos que se envie el valor mediante props.
defaultValue => permite editar el input
*/
