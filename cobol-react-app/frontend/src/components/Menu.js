// src/components/Menu.js

import React from 'react';
import styled from 'styled-components';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import des styles Font Awesome

const MenuContainer = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #004080; /* Bleu foncé pour la barre de menu */
  padding: 10px 20px;
`;

const MenuItem = styled.a`
  color: white;
  text-decoration: none;
  font-size: 24px;
  margin: 0 15px;
  transition: color 0.3s;

  &:hover {
    color: #a9c4eb; /* Couleur au survol */
  }
`;

const Menu = () => {
  return (
    <MenuContainer>
      <MenuItem href="#create-account" title="Créer un compte">
        <i className="fas fa-user-plus"></i>
      </MenuItem>
      <MenuItem href="#my-account" title="Aller sur mon compte">
        <i className="fas fa-user"></i>
      </MenuItem>
      <MenuItem href="#balance" title="Consulter le solde">
        <i className="fas fa-wallet"></i>
      </MenuItem>
    </MenuContainer>
  );
};

export default Menu;
