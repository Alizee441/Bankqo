import React, { useState } from 'react';

function DepotArgent() {
  const [accountNumber, setAccountNumber] = useState('');
  const [depositAmount, setDepositAmount] = useState('');
  const [message, setMessage] = useState('');

  const handleDeposit = async (e) => {
    e.preventDefault();

    const response = await fetch('/api/depot', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ accountNumber, depositAmount })
    });

    const result = await response.json();
    setMessage(result.message);
  };

  return (
    <div>
      <h2>Déposer de l'argent</h2>
      <form onSubmit={handleDeposit}>
        <div>
          <label>Numéro de compte :</label>
          <input
            type="text"
            value={accountNumber}
            onChange={(e) => setAccountNumber(e.target.value)}
          />
        </div>
        <div>
          <label>Montant à déposer :</label>
          <input
            type="number"
            value={depositAmount}
            onChange={(e) => setDepositAmount(e.target.value)}
          />
        </div>
        <button type="submit">Déposer</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default DepotArgent;