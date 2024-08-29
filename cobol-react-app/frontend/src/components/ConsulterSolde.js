import React, { useState } from 'react';

function ConsulterSolde() {
  const [accountNumber, setAccountNumber] = useState('');
  const [balance, setBalance] = useState(null);
  const [message, setMessage] = useState('');

  const handleCheckBalance = async (e) => {
    e.preventDefault();

    const response = await fetch(`/api/solde?accountNumber=${accountNumber}`);
    const result = await response.json();

    if (response.ok) {
      setBalance(result.balance);
    } else {
      setMessage(result.message);
    }
  };

  return (
    <div>
      <h2>Consulter le solde</h2>
      <form onSubmit={handleCheckBalance}>
        <div>
          <label>Numéro de compte :</label>
          <input
            type="text"
            value={accountNumber}
            onChange={(e) => setAccountNumber(e.target.value)}
          />
        </div>
        <button type="submit">Consulter</button>
      </form>
      {balance !== null ? (
        <p>Le solde du compte est de : {balance} EUR</p>
      ) : (
        message && <p>{message}</p>
      )}
    </div>
  );
}

export default ConsulterSolde;