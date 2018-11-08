const express = require('express');

const app = express();
const cors = require('cors');

app.use(cors());
app.use('/', require('./Routes'));

app.listen(4000, () => {
  console.log('App listening on port 3000!');
});
