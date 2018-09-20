var express = require('express');
var router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const findDocuments = function (db, callback) {
  // Get the documents collection
  const collection = db.collection('consultacoleccion');
  // Find some documents
  collection.find({}).toArray(function (err, docs) {
    assert.equal(err, null);
    console.log("Found the following records");
    console.log(docs);
    callback(docs);
  });
}

function getConsulta(callback) {
  // Connection URL
  const url = 'mongodb://localhost:27017';

  // Database Name
  const dbName = 'consultadb';

  // Use connect method to connect to the server
  MongoClient.connect(url, function (err, client) {
    assert.equal(null, err);
    console.log("Connected successfully to server");

    const db = client.db(dbName);
    findDocuments(db, (data) => {
      callback(data);
      client.close();
    });
  });
}

/* GET home page. */
router.get('/', function (req, res, next) {
  res.setHeader("Content-Type", "application/json");
  getConsulta((data) => res.send(data));
});

module.exports = router;