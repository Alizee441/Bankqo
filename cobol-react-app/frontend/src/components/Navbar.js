import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus, faWallet } from '@fortawesome/free-solid-svg-icons';

const NavbarContainer = styled.div`
  background-color: #004080;
  padding: 15px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;

const Logo = styled.h1`
  font-size: 24px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  margin: 0;
`;

const NavRight = styled.div`
  display: flex;
  gap: 20px;
`;

const NavItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;

  &:hover {
    color: #a9c4eb;
  }
`;

const IconLabel = styled.span`
  margin-top: 5px;
  font-size: 12px;
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      {/* Empty div for left spacing */}
      <div style={{ width: '100px' }}></div>

      <Logo>Banqko</Logo>

      <NavRight>
        <NavItem>
          <FontAwesomeIcon icon={faUserPlus} size="2x" />
          <IconLabel>Créer un compte</IconLabel>
        </NavItem>
        <NavItem>
          <FontAwesomeIcon icon={faWallet} size="2x" />
          <IconLabel>Aller sur mon compte</IconLabel>
        </NavItem>
      </NavRight>
    </NavbarContainer>
  );
};

export default Navbar;
