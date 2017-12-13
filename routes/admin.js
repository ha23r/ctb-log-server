
var express = require('express'),
router = express.Router(),
es_api = require('../elasticSearch/es_api');


router.get('/searchEvents',function(req,res) {
    es_api.searchEvents(req.query.indexName, req.query.recordType).then (
        function(results) {
            res.send(results)
        },
        function(err) {
            console.log(err)
            res.send('error')
        }
    )
})

router.get('/', function(req, res, next) {res.send('admin Hello World !')});

module.exports = router;    