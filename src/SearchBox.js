import React from 'react';

const SearchBox = ({ searchChanged }) => {
  return(
    <input type="search" placeholder="Search Robots" onChange={searchChanged}/>
  )
}

export default SearchBox;