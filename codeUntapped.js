const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const db = require('./db');

app.set('port', process.env.PORT || 3000);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/results', (req, res, next) => {
  var TimeNow = new Date();
  var answers = {
    "type": req.query.type
  }
  collection='Alexa';
  db().then(() => {
    db.Alexa.create(answers, collection).then((doc, err) => {
      console.log(doc)
    });
  });
});

app.listen(app.get('port'), () => {
  console.log('CodeUntapped on: http://localhost:%s', app.get('port'));
});

module.exports = app;
