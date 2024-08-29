const { pool } = require('../db');

// Créer un compte
const creerCompte = async (req, res) => {
    const { titulaire, solde } = req.body;
    try {
        const result = await pool.query(
            'INSERT INTO comptes (titulaire, solde) VALUES ($1, $2) RETURNING *',
            [titulaire, solde]
        );
        res.status(201).json(result.rows[0]);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Consulter un compte
const consulterCompte = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await pool.query(
            'SELECT * FROM comptes WHERE id = $1',
            [id]
        );
        if (result.rows.length > 0) {
            res.json(result.rows[0]);
        } else {
            res.status(404).json({ error: 'Compte non trouvé' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Fermer un compte
const fermerCompte = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await pool.query(
            'DELETE FROM comptes WHERE id = $1 RETURNING *',
            [id]
        );
        if (result.rows.length > 0) {
            res.json(result.rows[0]);
        } else {
            res.status(404).json({ error: 'Compte non trouvé' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    creerCompte,
    consulterCompte,
    fermerCompte
};