// backend/controllers/TransactionController.js
const Compte = require('../models/Compte');
const Transaction = require('../models/Transaction');

// Dépôt d'argent
exports.deposer = async (req, res) => {
    try {
        const { id } = req.params;
        const { montant } = req.body;
        const compte = await Compte.obtenirCompteParId(id);
        if (!compte) return res.status(404).json({ message: 'Compte non trouvé' });

        const nouveauSolde = compte.solde + montant;
        await Compte.mettreAJourSolde(id, nouveauSolde);
        await Transaction.creerTransaction(id, 'dépôt', montant);

        res.status(200).json({ message: 'Dépôt effectué avec succès', solde: nouveauSolde });
    } catch (error) {
        res.status(500).json({ message: 'Erreur lors du dépôt', error });
    }
};

// Retrait d'argent
exports.retirer = async (req, res) => {
    try {
        const { id } = req.params;
        const { montant } = req.body;
        const compte = await Compte.obtenirCompteParId(id);
        if (!compte) return res.status(404).json({ message: 'Compte non trouvé' });

        if (compte.solde < montant) return res.status(400).json({ message: 'Fonds insuffisants' });

        const nouveauSolde = compte.solde - montant;
        await Compte.mettreAJourSolde(id, nouveauSolde);
        await Transaction.creerTransaction(id, 'retrait', montant);

        res.status(200).json({ message: 'Retrait effectué avec succès', solde: nouveauSolde });
    } catch (error) {
        res.status(500).json({ message: 'Erreur lors du retrait', error });
    }
};

// Historique des transactions
exports.historiqueTransactions = async (req, res) => {
    try {
        const { id } = req.params;
        const transactions = await Transaction.obtenirTransactionsParCompte(id);
        if (!transactions.length) return res.status(404).json({ message: 'Aucune transaction trouvée pour ce compte' });
        res.status(200).json(transactions);
    } catch (error) {
        res.status(500).json({ message: 'Erreur lors de la récupération de l\'historique des transactions', error });
    }
};