import React, { useState } from "react";
import './Search.css';


const Search = (props) => {
  const [search, setSearch ] = useState('')


  const onFormSubmit = (event) => {
      event.preventDefault();
      props.search(search)
  }

  return (
    <div className="search">
      <form className="form"
      onSubmit={onFormSubmit}>
        <div className="">
          <input className="input-control margin"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type='text' 
            placeholder='Search here'/>
            <button className='btn btn-outline-dark py-3'>Submit</button>
        </div>
      </form>
    </div>
  )
}

export default Search;;