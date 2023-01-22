const MongoClient = require('mongodb').MongoClient;
const { Readable } = require('stream');

const url = 'mongodb+srv://Alina:Nikol123@cluster0.keyzafj.mongodb.net/test'; // Connection URL
const dbName = 'animes'; // Database Name
const collectionName = 'all_animes'; // Collection Name

exports.retrieveData = function(){
    return new Promise((resolve, reject) => {
        MongoClient.connect(url, { useNewUrlParser: true }, function(err, client) {
            if (err) throw err;
            console.log("Connected to DB server.")
          
            const db = client.db(dbName);
            const collection = db.collection(collectionName);
          
            let docs = [];
            let cursor = collection.find({}).stream();
          
            cursor.on('data', (doc) => {
              docs.push(doc);
            });
          
            cursor.on('end', () => {
                exports.docs = docs;
                client.close();
                resolve();
            });
        });
        
    })
}
