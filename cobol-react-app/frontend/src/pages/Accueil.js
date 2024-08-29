// /frontend/src/pages/Accueil.js

import React from 'react';
import { Link } from 'react-router-dom'; // Pour la navigation entre les pages

const Accueil = () => {
  return (
    <div className="accueil-container">
      <header className="accueil-header">
        <h1>Bienvenue dans votre Banque</h1>
        <nav>
          <ul>
            <li><Link to="/creer-compte">Créer un Compte</Link></li>
            <li><Link to="/fermer-compte">Fermer un Compte</Link></li>
            <li><Link to="/depot-argent">Déposer de l'Argent</Link></li>
            <li><Link to="/retrait">Retirer de l'Argent</Link></li>
            <li><Link to="/consulter-solde">Consulter le Solde</Link></li>
          </ul>
        </nav>
      </header>
      <main className="accueil-main">
        <section className="accueil-intro">
          <h2>Gérez vos comptes en toute simplicité</h2>
          <p>
            Nous vous offrons des solutions simples et sécurisées pour gérer vos finances.
            Utilisez les liens ci-dessus pour accéder aux différentes fonctionnalités de votre compte bancaire.
          </p>
        </section>
      </main>
      <footer className="accueil-footer">
        <p>&copy; 2024 Banque Exemple. Tous droits réservés.</p>
      </footer>
    </div>
  );
}

export default Accueil;