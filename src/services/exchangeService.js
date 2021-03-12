const ccxt = require('ccxt');

const getServiceWallet = async (exchangeId, apiKey, secret) => {
  const exchangeClass = ccxt[exchangeId];
  const exchange = new exchangeClass({
    apiKey,
    secret,
  });

  const balancesResponse = await exchange.fetchBalance();
  const balances = balancesResponse.info.balances;
  return { balances };
};

module.exports = getServiceWallet;
