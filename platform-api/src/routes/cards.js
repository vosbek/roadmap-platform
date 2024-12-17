const express = require('express');
const router = express.Router();
const cardController = require('../controllers/cardController');

router.get('/', cardController.getCards);
router.get('/:id', cardController.getCardById);
router.post('/', cardController.createCard);
router.put('/:id', cardController.updateCard);
router.delete('/:id', cardController.deleteCard);
router.get('/:id/references', cardController.getCardReferences);
router.post('/:id/references', cardController.createCardReference);

module.exports = router;