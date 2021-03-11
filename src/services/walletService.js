const axios = require('axios');
const dotenv = require('dotenv');

dotenv.config();

const getWallet = async (ethAddress) => {
  const apiUrl = process.env.API_URL;
  const apiKey = process.env.API_KEY;

  const balanceResponse = await axios.get(`${apiUrl}?module=account&action=balance&address=${ethAddress}&tag=latest&apikey=${apiKey}`);
  const transactionsResponse = await axios.get(
    `${apiUrl}?module=account&action=txlist&address=${ethAddress}&startblock=0&endblock=99999999&sort=asc&apikey=${apiKey}`
  );

  const balance = +balanceResponse.data.result;
  const etherTransactions = transactionsResponse.data.result;
  const transactions = [];

  const ethRatio = 1000000000000000000;
  etherTransactions.forEach((transaction) => {
    if (transaction.isError === '0' && transaction.txreceipt_status === '1') {
      transactions.push({
        currency: 'ETH',
        timestamp: transaction.timeStamp,
        hash: transaction.hash,
        from: transaction.from,
        to: transaction.to,
        amount: transaction.value / ethRatio,
        fees: (transaction.gasPrice * transaction.gasUsed) / ethRatio,
      });
    }
  });

  return { balance, transactions };
};

module.exports = getWallet;
