// backend/models/Compte.js
const pool = require('../db');

// Fonction pour créer un compte
const creerCompte = async (titulaire, solde) => {
    const result = await pool.query(
        'INSERT INTO comptes (titulaire, solde) VALUES ($1, $2) RETURNING *',
        [titulaire, solde]
    );
    return result.rows[0];
};

// Fonction pour obtenir un compte par ID
const obtenirCompteParId = async (id) => {
    const result = await pool.query('SELECT * FROM comptes WHERE id = $1', [id]);
    return result.rows[0];
};

// Fonction pour fermer un compte
const fermerCompte = async (id) => {
    await pool.query('DELETE FROM comptes WHERE id = $1', [id]);
};

// Fonction pour mettre à jour le solde d'un compte
const mettreAJourSolde = async (id, solde) => {
    const result = await pool.query(
        'UPDATE comptes SET solde = $1 WHERE id = $2 RETURNING *',
        [solde, id]
    );
    return result.rows[0];
};

module.exports = {
    creerCompte,
    obtenirCompteParId,
    fermerCompte,
    mettreAJourSolde,
};