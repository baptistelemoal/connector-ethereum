const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const express = require('express');
const wallerRouter = require('./routers/walletRouter');
const exchangeRouter = require('./routers/exchangeRouter');
const handleError = require('./middlewares/handleError');

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/wallet', wallerRouter);
app.use('/exchange', exchangeRouter);

app.use(handleError);

app.listen(port, () => console.log(`Server started on port ${port}`));
