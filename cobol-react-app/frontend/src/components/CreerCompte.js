import React, { useState } from 'react';

function CreerCompte() {
  const [accountNumber, setAccountNumber] = useState('');
  const [accountHolder, setAccountHolder] = useState('');
  const [initialDeposit, setInitialDeposit] = useState('');
  const [message, setMessage] = useState('');

  const handleCreateAccount = async (e) => {
    e.preventDefault();

    const response = await fetch('/api/creer-compte', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ accountNumber, accountHolder, initialDeposit })
    });

    const result = await response.json();
    setMessage(result.message);
  };

  return (
    <div>
      <h2>Créer un compte</h2>
      <form onSubmit={handleCreateAccount}>
        <div>
          <label>Numéro de compte :</label>
          <input
            type="text"
            value={accountNumber}
            onChange={(e) => setAccountNumber(e.target.value)}
          />
        </div>
        <div>
          <label>Nom du titulaire :</label>
          <input
            type="text"
            value={accountHolder}
            onChange={(e) => setAccountHolder(e.target.value)}
          />
        </div>
        <div>
          <label>Dépôt initial :</label>
          <input
            type="number"
            value={initialDeposit}
            onChange={(e) => setInitialDeposit(e.target.value)}
          />
        </div>
        <button type="submit">Créer le compte</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default CreerCompte;