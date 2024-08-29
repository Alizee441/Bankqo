// /frontend/src/App.js

import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes'; // Importer le fichier routes.js

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <AppRoutes /> {/* Utiliser les routes définies dans routes.js */}
      </div>
    </Router>
  );
}

export default App;
