import React from 'react';
import '../../App.css'
import Nav from '../Nav/Nav.js'
import StyledHeaderPage from './styles.js'

export default function Header() {

  return (
    <>
      <StyledHeaderPage>
        <Nav />
      </StyledHeaderPage>
    </>
  )
}

