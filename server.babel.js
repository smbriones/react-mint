import express from 'express';
const sassMiddleware = require('node-sass-middleware');
const path = require('path');
const app = express();

app.listen(process.env.PORT || 3000);

app.use(sassMiddleware({
  src: __dirname + '/sass',
    dest: __dirname + '/public/stylesheets',
    debug: true,
  })
);
app.use(express.static(path.join(__dirname, 'public')));
