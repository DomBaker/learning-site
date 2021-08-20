const express = require('express')
const app = express()
const nunjucks = require('nunjucks')
const port = 3000

app.set('view engine', 'html');

nunjucks.configure([
   './views',
   'node_modules/nhsuk-frontend/packages/components',
 ], {
   autoescape: true,
   express: app,
   watch: true,
 });

 app.get('/', function(req, res) {
    res.render('index.html');
}); 

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
