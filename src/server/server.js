const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');

const app = express();

const PORT = 4000;

app.use(cors());

app.use(bodyParser.json({
  limit: '5mb',
}));

app.use('/', require('./Routes'));

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
