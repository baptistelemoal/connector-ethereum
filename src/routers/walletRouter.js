const WalletController = require('../controllers/walletController');
const express = require('express');

const router = express.Router();
const walletController = new WalletController();
const { get } = walletController;

router.get('/', (req, res, next) => get(req, res, next));

module.exports = router;
