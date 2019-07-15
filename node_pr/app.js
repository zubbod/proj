const express = require('express');
const app = express();
const handlebars = require('express-handlebars');

const host = '127.0.0.1';
const port = 7000;

app.use('/logos/', express.static(`${__dirname}/assets/logo`));

// app.get('/home', (req, res) => {
//  res.status(200).type('text/plain');
//  res.send('Home page');
// });

// app.get('/about', (req, res) => {
//  res.status(200).type('text/plain');
//  res.send('About page');
// });

// app.post('/api/admin', (req, res) => {
//  res.status(200).type('text/plain');
//  res.send('Create admin request');
// });

// app.post('/api/user', (req, res) => {
//  res.status(200).type('text/plain');
//  res.send('Create user request');
// });

// app.use((req, res, next) => {
//  res.status(404).type('text/plain');
//  res.send('Not found');
// });



app.engine('handlebars', handlebars({
                                      defaultLayout: 'main',
                                      helpers: {
                                        getLines: () => ['first', 'second', 'third'].map((i)=>i.toUpperCase())
                                      }}));
app.set('views', './views');
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
  res.render('home', {title: 'Greeating from Handlebars!',
                      paragraph: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia incidunt et commodi?',
                      image: 'logos/final.png',
                      content: 'dausidgfasugdyfud',
                      tags: [
                        'html', 'css', 'sass', 'js', 'nodejs'
                      ]
                    });
});

app.listen(port, host, function () {
  console.log(`Server listens http://${host}:${port}`);
}); 