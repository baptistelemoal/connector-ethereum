const ExchangeController = require('../controllers/exchangeController');
const express = require('express');

const router = express.Router();
const exchangeController = new ExchangeController();
const { serviceWallet } = exchangeController;

router.post('/', (req, res, next) => serviceWallet(req, res, next));

module.exports = router;
