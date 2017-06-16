const db = require('./server/db/index.js')
const express = require('express');
const parser = require('body-parser');
const router = require('./server/routes/index.js')
const app = express();

app.use(parser.json());

app.use(router);

app.listen(3000);

app.get('*', express.static(__dirname));


console.log('server listening on port 3000');
