import React from 'react'
import './header.css'
import SearchIcon from '@mui/icons-material/Search';
import { Avatar } from '@mui/material';
import InboxIcon from '@mui/icons-material/Inbox';
import ChatIcon from '@mui/icons-material/Chat';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
    <div className='header-container'>
        <div className='header-left'>
          {/* <Link to='/'><img src="https://bit.ly/3AYpqaC" alt='logo' /></Link> */}
          <a href="/"><img src="https://bit.ly/3AYpqaC" alt='logo' /></a>
          <h3>Products</h3>
        </div>
        <div className='header-middle'>
          <div className="header-search-container">
            <SearchIcon/>
            <input type = "text" placeholder='Search...'/>
          </div>
        </div>
        <div className='header-right'>
          <div className="header-right-container">
            <Avatar/>
            <InboxIcon/>
           <ChatIcon/>
          </div>
        </div>
    </div>
    </header>
  )
}

export default Header