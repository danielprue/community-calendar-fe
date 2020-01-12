import React, {useState, useEffect} from 'react';
import {navsearch} from './Navbar.module.scss';
import {withRouter} from 'react-router-dom';

/* 
This component appears in the NavBar.
*/
const NavbarSearchBox = props => {
  const [searchText, setSearchText] = useState("");

  const handleChange = e => {
    setSearchText(e.target.value);
  }

  const handleSearchClick = () => {
      if(searchText.length) {
        props.history.push(`/search/${searchText}`);
      }
  }
  
  return (
    <div className={`${navsearch} navbar-start control`}>
      <input className={` input`} type='text' placeholder='Search' onChange={e => handleChange(e)} value={searchText}/>
      <button onClick={handleSearchClick}>Go</button>
    </div>
  );
};

export default withRouter(NavbarSearchBox);
