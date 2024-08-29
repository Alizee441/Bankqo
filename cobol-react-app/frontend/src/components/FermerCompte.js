import React, { useState } from 'react';

function FermerCompte() {
  const [accountNumber, setAccountNumber] = useState('');
  const [message, setMessage] = useState('');

  const handleCloseAccount = async (e) => {
    e.preventDefault();

    const response = await fetch('/api/fermer-compte', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ accountNumber })
    });

    const result = await response.json();
    setMessage(result.message);
  };

  return (
    <div>
      <h2>Fermer un compte</h2>
      <form onSubmit={handleCloseAccount}>
        <div>
          <label>Numéro de compte :</label>
          <input
            type="text"
            value={accountNumber}
            onChange={(e) => setAccountNumber(e.target.value)}
          />
        </div>
        <button type="submit">Fermer le compte</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default FermerCompte;