// /frontend/src/pages/Operations.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Pour la navigation entre les pages

const Operations = () => {
  const [selectedOperation, setSelectedOperation] = useState(null);

  const handleOperationSelect = (operation) => {
    setSelectedOperation(operation);
  };

  return (
    <div className="operations-container">
      <header className="operations-header">
        <h1>Effectuer une Opération Bancaire</h1>
        <nav>
          <ul>
            <li>
              <button onClick={() => handleOperationSelect('depot')}>
                Déposer de l'Argent
              </button>
            </li>
            <li>
              <button onClick={() => handleOperationSelect('retrait')}>
                Retirer de l'Argent
              </button>
            </li>
            <li>
              <button onClick={() => handleOperationSelect('consultation')}>
                Consulter le Solde
              </button>
            </li>
          </ul>
        </nav>
      </header>
      <main className="operations-main">
        {selectedOperation === 'depot' && (
          <div>
            <h2>Dépôt d'Argent</h2>
            <form>
              <label>
                Montant à déposer :
                <input type="number" placeholder="Montant" />
              </label>
              <button type="submit">Déposer</button>
            </form>
          </div>
        )}
        {selectedOperation === 'retrait' && (
          <div>
            <h2>Retrait d'Argent</h2>
            <form>
              <label>
                Montant à retirer :
                <input type="number" placeholder="Montant" />
              </label>
              <button type="submit">Retirer</button>
            </form>
          </div>
        )}
        {selectedOperation === 'consultation' && (
          <div>
            <h2>Consultation du Solde</h2>
            <p>Votre solde actuel est : <strong>$0.00</strong></p>
          </div>
        )}
      </main>
      <footer className="operations-footer">
        <Link to="/accueil">Retour à l'accueil</Link>
      </footer>
    </div>
  );
}

export default Operations;