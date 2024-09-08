// src/components/HomePage.js

import React from 'react';
import styled from 'styled-components';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import des styles Font Awesome

const HomePageContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #4b79a1, #283e51); /* Dégradé linéaire */
  color: #ffffff;
  text-align: center;
  font-family: 'Comfortaa', sans-serif; /* Application de la police Comfortaa */
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 20px;
  font-weight: 700;
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  margin-bottom: 40px;
  font-weight: 400;
`;

const FeatureContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
`;

const Feature = styled.a`
  background: rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 250px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.3s;
  text-decoration: none; /* Retirer le soulignement du lien */
  color: #ffffff; /* Couleur du texte */

  &:hover {
    transform: scale(1.05);
  }

  i {
    font-size: 3rem;
    color: #ffffff;
    margin-bottom: 10px;
  }

  h3 {
    font-size: 1.25rem;
    margin-bottom: 10px;
    font-weight: 700;
  }

  p {
    font-size: 1rem;
    color: #ffffff;
  }
`;

const HomePage = () => {
  return (
    <HomePageContainer>
      <Title>Bienvenue chez Banqko</Title>
      <Subtitle>Votre partenaire bancaire de confiance</Subtitle>
      <FeatureContainer>
        <Feature href="/creer-compte">
          <i className="fas fa-user-plus"></i>
          <h3>Créer un compte</h3>
          <p>Ouvrez un nouveau compte en quelques minutes.</p>
        </Feature>
        <Feature href="/operations">
          <i className="fas fa-user"></i>
          <h3>Gérer mon compte</h3>
          <p>Accédez à toutes les fonctionnalités de votre compte.</p>
        </Feature>
        <Feature href="/consulter-solde">
          <i className="fas fa-wallet"></i>
          <h3>Consulter le solde</h3>
          <p>Visualisez le solde et les transactions de votre compte.</p>
        </Feature>
      </FeatureContainer>
    </HomePageContainer>
  );
};

export default HomePage;
