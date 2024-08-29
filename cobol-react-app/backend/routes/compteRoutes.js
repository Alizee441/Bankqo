const express = require('express');
const router = express.Router();

// Assurez-vous que le chemin est correct
const CompteController = require('../controllers/CompteController');

// Définir les routes
router.post('/', CompteController.creerCompte);
router.get('/:id', CompteController.consulterCompte);
router.delete('/:id', CompteController.fermerCompte);

module.exports = router;