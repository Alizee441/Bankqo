const express = require('express');
const router = express.Router();
const TransactionController = require('../controllers/TransactionController');

// Dépôt d'argent
router.post('/depot', TransactionController.deposer);

// Retrait d'argent
router.post('/retrait', TransactionController.retirer);

// Historique des transactions pour un compte
router.get('/historique/:id', TransactionController.historiqueTransactions);

module.exports = router;