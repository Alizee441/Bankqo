// /frontend/src/routes.js

import React from 'react';
import { Route, Routes } from 'react-router-dom'; // Pour la gestion des routes
import Accueil from './pages/Accueil'; // Page d'accueil
import Operations from './pages/Operations'; // Page pour les opérations bancaires
import CreerCompte from './components/CreerCompte'; // Composant pour créer un compte
import FermerCompte from './components/FermerCompte'; // Composant pour fermer un compte
import DepotArgent from './components/DepotArgent'; // Composant pour déposer de l'argent
import Retrait from './components/Retrait'; // Composant pour retirer de l'argent
import ConsulterSolde from './components/ConsulterSolde'; // Composant pour consulter le solde

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Accueil />} />
      <Route path="/operations" element={<Operations />} />
      <Route path="/creer-compte" element={<CreerCompte />} />
      <Route path="/fermer-compte" element={<FermerCompte />} />
      <Route path="/depot-argent" element={<DepotArgent />} />
      <Route path="/retrait" element={<Retrait />} />
      <Route path="/consulter-solde" element={<ConsulterSolde />} />
    </Routes>
  );
}

export default AppRoutes;