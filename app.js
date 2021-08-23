const express = require('express');
const nunjucks = require('nunjucks');
const path = require('path');

const app = express();
const port = 3000;

app.set('view engine', 'html');

nunjucks.configure([
  'app/views',
  'node_modules/nhsuk-frontend/packages/components',
], {
  autoescape: true,
  express: app,
  watch: true,
});

app.use(express.static(path.join(__dirname, './app/assets/dist/')));

app.get('/', (req, res) => {
  res.render('index.html');
});

app.locals.asset_path = './app/assets/dist/';

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Example app listening at http://localhost:${port}`);
});
