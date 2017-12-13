var client = require('./connection.js');  
var eventsIndex    = process.env.EVENTS_INDEX,
eventsDocType  = process.env.EVENTS_TYPE,
fallbackEventsIndex  = process.env.FALLBACK_EVENTS_INDEX;




function createNewIndex(indexName) {
  client.indices.create({  
    index: indexName
  },function(err,resp,status) {
    if(err) {
      console.log(err);
    }
    else {
      console.log("create",resp);
    }
  });
}

function logEvent(eventObject) {
  return indexDocument(eventsIndex, eventsDocType,eventObject);
}

function indexDocument(indexName, docType, docObject) {
  return new Promise(function (resolve, reject) {
    client.index({
      index: indexName,
      type: docType,
      body: docObject
    }).then(function(resp) {
      resolve(resp);
    }, function (err) {
      reject(err.message);
    })
  })

}

function searchEvents(indexName, recordType) {
  /*
  client.search({
    index: indexName,
    type: recordType   
  }).then(function (resp) {
      var hits = resp.hits.hits;
      console.log(hits.le)
    }, function (err) {
      console.trace(err.message);
  });
*/

  return new Promise( function (resolve, reject) {
    client.search({
      index: indexName,
      type: recordType   
    }).then(function (resp) {
      resolve(resp);
      }, function (err) {
        reject(err.message);
    });
  }) 


  }

module.exports = {createNewIndex, logEvent, searchEvents}