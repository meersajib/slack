import React from 'react'
import { Avatar } from '@material-ui/core'
import SearchIcon  from '@material-ui/icons/Search'
import AccessTimeIcon from '@material-ui/icons/AccessTime'
import HelpOutlineIcon from '@material-ui/icons/HelpOutline'
import './Header.css'
import { useStateValue } from '../StateProvider'

function Header() {
  const [{ user }, dispatch] = useStateValue()
  console.log(user)
    return (
      <div className='header'>
        <div className='header__left'>
          {/* Avatar */}
          <img className='header__userPhoto' src={user.photoURL} alt='' />
          {/* TimeAccess Icon */}
          <AccessTimeIcon />
        </div>
        <div className='header__center'>
          <SearchIcon />
          <input placeholder='Search Your Chanel' type='text' />
        </div>
        <div className='header__right'>
          <HelpOutlineIcon />
        </div>
      </div>
    );
}

export default Header
