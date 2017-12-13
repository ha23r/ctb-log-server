
var express = require('express'),
router = express.Router(),
es_api = require('../elasticSearch/es_api');


//end point for logging product event
router.get('/logEvent',function(req,res) { 
    //TODO:: move to async call
    var eventId = 'noneyet'
    je = JSON.parse(req.query.event)
    //TODO:: add code to fallback events, if format is wrond
    es_api.logEvent(je).then (
        function(results) {
            eventId = results._id;
            console.log('new event. id %s',eventId)
        },
        function(err) {
            console.log(err)
        }
    )
    res.send({'status':'received','id':eventId})
})

module.exports = router;
