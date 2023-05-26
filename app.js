const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const router = require('./routes');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.text({ type: 'text/plain' }));
app.use(router);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
