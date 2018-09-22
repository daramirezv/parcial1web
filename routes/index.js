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


function putVisual(req, callback) {
  // Connection URL
  const url = 'mongodb://parcial:parcial1@ds111113.mlab.com:11113/visualizaciones';

  // Database Name
  const dbName = 'visualizaciones';

  MongoClient.connect(url, function (err, client) {
    assert.equal(null, err);
    console.log('Connected successfully to server');

    const db = client.db(dbName);

    updateDocument(req, db, (data) => {
      callback(data);
      client.close();
    });

  });
}

const updateDocument = function (req, db, callback) {
  // Get the documents collection
  const collection = db.collection('coleccion');
  // Update document where a is 2, set b equal to 1
  collection.updateOne({ titulo: req.query.titulo }
    , { $set: { rating: req.query.rating } }, function (err, result) {
      assert.equal(err, null);
      assert.equal(1, result.result.n);
      console.log('Updated the document with the field a equal to 2');
      callback(result);
    });
}

function deleteVisual(req, callback) {
  // Connection URL
  const url = 'mongodb://parcial:parcial1@ds111113.mlab.com:11113/visualizaciones';

  // Database Name
  const dbName = 'visualizaciones';

  MongoClient.connect(url, function (err, client) {
    assert.equal(null, err);
    console.log('Connected successfully to server');

    const db = client.db(dbName);

    removeDocument(req, db, (data) => {
      callback(data);
      client.close();
    });

  });
}

const removeDocument = function (req, db, callback) {
  // Get the documents collection
  const collection = db.collection('coleccion');
  // Delete document where a is 3
  collection.deleteOne({ titulo: req.query.titulo }, function (err, result) {
    assert.equal(err, null);
    assert.equal(1, result.result.n);
    console.log('Removed the document with the field a equal to 3');
    callback(result);
  });
}

/* GET home page. */
//se usa para pedir los veinte ultimas visualizaciones
router.get('/getVisual', function (req, res, next) {
  getVisual((data) => res.send(data.slice(-20)));
});

//se usa para registrar una visualizacion
router.post('/postVisual', function (req, res, next) {
  postVisual(req, (data) => res.send(data));
});

//se usa para updatear un rating
router.put('/putVisual', function (req, res, next) {
  putVisual(req, (data) => res.send(data));
});

//se usa para borrar una visualizacion
router.delete('/deleteVisual', function (req, res, next) {
  deleteVisual(req, (data) => res.send(data));
});

module.exports = router;
