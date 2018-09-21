var express = require('express');
var router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

function getVisual(callback) {
  // Connection URL
  const url = 'mongodb://parcial:parcial1@ds111113.mlab.com:11113/visualizaciones';

  // Database Name
  const dbName = 'visualizaciones';

  // Use connect method to connect to the server
  MongoClient.connect(url, function (err, client) {
    assert.equal(null, err);
    console.log('Connected successfully to server');

    const db = client.db(dbName);
    findDocuments(db, (data) => {
      callback(data);
      client.close();
    });
  });
}

const findDocuments = function (db, callback) {
  // Get the documents collection
  const collection = db.collection('coleccion');
  // Find some documents
  collection.find({}).toArray(function (err, docs) {
    assert.equal(err, null);
    console.log('Found the following records');
    console.log(docs);
    callback(docs);
  });
}


function postVisual(req, callback) {
  // Connection URL
  const url = 'mongodb://parcial:parcial1@ds111113.mlab.com:11113/visualizaciones';

  // Database Name
  const dbName = 'visualizaciones';

  MongoClient.connect(url, function (err, client) {
    assert.equal(null, err);
    console.log('Connected successfully to server');

    const db = client.db(dbName);

    insertDocuments(req, db, (data) => {
      callback(data);
      client.close();
    });

  });
}

const insertDocuments = function (req, db, callback) {
  // Get the documents collection
  const collection = db.collection('coleccion');
  // Insert some documents
  const objeto = req.query;

  collection.insertMany([objeto],
    function (err, result) {
      assert.equal(err, null);
      callback(result);
    });
}

/* GET home page. */
router.get('/getVisual', function (req, res, next) {
  getVisual((data) => res.send(data.slice(0,20)));
});

router.post('/postVisual', function (req, res, next) {
  postVisual(req, (data) => res.send(data));
});

module.exports = router;
