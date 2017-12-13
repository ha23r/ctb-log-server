var client = require('./connection.js');

client.cluster.health({},function(err,resp,status) {  
  console.log("-- Client Health --",resp);
});

// Test the connection:
// Send a HEAD request to "/" and allow
//up to 30 seconds for it to complete.
client.ping({
    requestTimeout: 30000,
  }, function (error) {
    if (error) {
      console.error('elasticsearch cluster is down!');
    } else {
      console.log('All is well');
    }
  });  