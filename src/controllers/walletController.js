const getWallet = require('../services/walletService');

class WalletController {
  get = async (req, res, next) => {
    try {
      const address = req.query.address;
      if (!address) {
        throw new Error('Missing address');
      }

      const wallet = await getWallet(address);
      return res.json(wallet);
    } catch (err) {
      next(err);
    }
  };
}

module.exports = WalletController;
