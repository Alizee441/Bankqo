// src/components/Navbar.js

import React from 'react';
import styled from 'styled-components';

const NavbarContainer = styled.nav`
  width: 100%;
  height: 60px;
  background-color: #004080;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Logo = styled.div`
  font-size: 1.5rem;
  color: #ffffff;
  font-weight: bold;
  font-family: 'Comfortaa', sans-serif;
`;

const NavItems = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const NavItem = styled.a`
  color: #ffffff;
  text-decoration: none;
  font-size: 1rem;
  font-family: 'Comfortaa', sans-serif;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <Logo>Banqko</Logo>
      <NavItems>
        <NavItem href="#account">Mon Compte</NavItem>
      </NavItems>
    </NavbarContainer>
  );
};

export default Navbar;
