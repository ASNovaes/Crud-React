import React from 'react';
import '../../App.css'
import Nav from '../Nav/Nav.js'

class Header extends React.Component {
    render() {
      return (
        <>
          <header className={'header-page'}>
            <Nav />
          </header>
        </>
      )
    }
  }

  export default Header;