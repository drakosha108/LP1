const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

const port = parseInt(process.env.PORT, 10) || 8090;

app.use(cors());
app.use(express.static('./public'));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
