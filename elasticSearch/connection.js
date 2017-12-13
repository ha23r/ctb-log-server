var bonsai_url    = process.env.BONSAI_URL;

/*ELasic Search Initialization*/

var elasticsearch=require('elasticsearch');
var client        = new elasticsearch.Client({
  host: bonsai_url,
  log: 'trace' 
});


module.exports = client;  
