//̥i
import React from 'react'

const Header = (setSearch) => {
  return (
    <div className='header'>
    <h1 className='header-text'>CRYPTO WORLD</h1>
    <input
                type="text"
                placeholder="Search..."
                onChange={(e) => {
                    setSearch(e.target.value);
                }}/>
                </div>
            
  )
}

export default Header