**Cryptocurrencies wallets or exchanges connector**

-----

Ethereum: Set Etherscan key "ETH_API_KEY" in .env file

-----

Install dependencies: `yarn install` or `yarn`

Dev: `yarn dev`

Prod: `yarn start`

-----

Routes for wallets (GET):

- BTC: http://localhost:5000/wallet/btc?address=ADDRESS_HERE
- ETH: http://localhost:5000/wallet/eth?address=ADDRESS_HERE

Routes for all exchanges (POST):
- http://localhost:5000/exchange

`{ "exchange": "binance", "apiKey": "...", "secret": "..." }`
