const dataModule = require('./js/db-manager');
const express = require('express');
const path = require('path');

const app = express();
const port = 5050;

dataModule.retrieveData()
  .then(() => {
    app.get('/data', function(req, res){
      res.json(dataModule.docs);
    });

    app.use('/', express.static(__dirname));

    app.get('/', function(req, res){
      res.sendFile(path.join(__dirname, 'html/main-page.html'));
    });

    app.use('/my-favourite-ones', express.static(__dirname));

    app.get('/my-favourite-ones', function(req, res){
      res.sendFile(path.join(__dirname, 'html/my-favourite-ones.html'));
   });

    app.listen(port, () => {
      console.log('Server started on port ' + port + '.');
    });
  }).catch(err => console.log(err));
