import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [nom, setNom] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post('http://localhost:5000/api/salut', { nom });
    setMessage(response.data.message);
  };

  return (
    <div>
      <h1>Application React avec COBOL</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Entrez votre nom :
          <input type="text" value={nom} onChange={(e) => setNom(e.target.value)} />
        </label>
        <button type="submit">Envoyer</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default App;
