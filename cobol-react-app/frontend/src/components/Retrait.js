import React, { useState } from 'react';

function Retrait() {
  const [accountNumber, setAccountNumber] = useState('');
  const [amount, setAmount] = useState('');
  const [message, setMessage] = useState('');

  const handleRetrait = async (e) => {
    e.preventDefault();
    
    const response = await fetch('/api/retrait', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ accountNumber, amount })
    });

    const result = await response.json();
    setMessage(result.message);
  };

  return (
    <div>
      <h2>Retirer de l'argent</h2>
      <form onSubmit={handleRetrait}>
        <div>
          <label>Numéro de compte :</label>
          <input
            type="text"
            value={accountNumber}
            onChange={(e) => setAccountNumber(e.target.value)}
          />
        </div>
        <div>
          <label>Montant :</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <button type="submit">Retirer</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default Retrait;