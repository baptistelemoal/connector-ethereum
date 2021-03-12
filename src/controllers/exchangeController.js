const getServiceWallet = require('../services/exchangeService');

class ExchangeController {
  serviceWallet = async (req, res, next) => {
    try {
      const { exchange, apiKey, secret } = req.body;
      const wallet = await getServiceWallet(exchange, apiKey, secret);
      return res.json(wallet);
    } catch (err) {
      next(err);
    }
  };
}

module.exports = ExchangeController;
