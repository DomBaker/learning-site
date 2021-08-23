const express = require('express')
const app = express()
const nunjucks = require('nunjucks')
const port = 3000
const path = require('path')

app.set('view engine', 'html');

nunjucks.configure([
   'app/views',
   'node_modules/nhsuk-frontend/packages/components',
 ], {
   autoescape: true,
   express: app,
   watch: true,
 });

 app.get('/', function(req, res) {
    res.render('template.html');
}); 

app.locals.asset_path = '/public/'

// Middleware to serve static assets
app.use(express.static(path.join(__dirname, 'public')));
app.use('/nhsuk-frontend', express.static(path.join(__dirname, 'node_modules/nhsuk-frontend/packages')));
app.use('/nhsuk-frontend', express.static(path.join(__dirname, 'node_modules/nhsuk-frontend/dist')));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
