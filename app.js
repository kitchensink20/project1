const MongoClient = require('mongodb').MongoClient;
const express = require('express');
const path = require('path');
const { Readable } = require('stream');

const url = 'mongodb+srv://Alina:Nikol123@cluster0.keyzafj.mongodb.net/test'; // Connection URL
const dbName = 'animes'; // Database Name
const collectionName = 'all_animes'; // Collection Name

const app = express();
const port = 5050;

let docs = [];

MongoClient.connect(url, { useNewUrlParser: true }, function(err, client) {
  if (err) throw err;
  console.log("Connected successfully to Database server");

  const db = client.db(dbName);
  const collection = db.collection(collectionName);

  let cursor = collection.find({}).stream();

  cursor.on('data', (doc) => {
    docs.push(doc);
  });

  cursor.on('end', () => {
    client.close();
  });

  app.use('/', express.static(__dirname));

  app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, 'html/main-page.html'));
  });

  app.get('/data', function(req, res){
    res.json(docs);
  });

  app.use('/my-favourite-ones', express.static(__dirname));

  app.get('/my-favourite-ones', function(req, res){
    res.sendFile(path.join(__dirname, 'html/my-favourite-ones.html'));
  });

  app.listen(port, () => {
    console.log('Server started on port ' + port);
  });
});
