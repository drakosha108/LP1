const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

const routes = require('./routes');

const port = parseInt(process.env.PORT, 10) || 8090;

app.use(cors());
app.use(express.static('./public'));
app.use(bodyParser.json());

routes(app);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
