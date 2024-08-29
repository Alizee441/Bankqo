// backend/models/Transaction.js
const pool = require('../db');

// Fonction pour créer une transaction
const creerTransaction = async (compteId, type, montant) => {
    const result = await pool.query(
        'INSERT INTO transactions (compte_id, type, montant) VALUES ($1, $2, $3) RETURNING *',
        [compteId, type, montant]
    );
    return result.rows[0];
};

// Fonction pour obtenir les transactions d'un compte
const obtenirTransactionsParCompte = async (compteId) => {
    const result = await pool.query('SELECT * FROM transactions WHERE compte_id = $1 ORDER BY date DESC', [compteId]);
    return result.rows;
};

module.exports = {
    creerTransaction,
    obtenirTransactionsParCompte,
};