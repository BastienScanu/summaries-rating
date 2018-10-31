const express = require('express');
const app = express();

const router = express.Router();
require('./Routes')(router);
app.use('/', router);

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.listen(3000, () => {
  console.log('App listening on port 3000!')
});