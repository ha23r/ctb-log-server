
var express = require('express'),
router = express.Router(),
es_api = require('../elasticSearch/es_api');


//end point for logging product event
router.all('/logEvent',function(req,res) { 
    var eventId = "noneyet"
    var status = "received"
    var error = ""
    try {
        je = JSON.parse(req.query.event)
        //TODO:: add code to fallback events, if format is wrond
        es_api.logEvent(je).then (
            function(results) {
                eventId = results._id;
                console.log('new event. id %s',eventId)
            },
            function(err) {
                error = err
                status = "fallback"
                console.log(err)
                je = {"fallbackEvent":req.query.event}
                es_api.logUnformattedEvent(je).then (
                    function(results) {
                        eventId = results._id;
                        console.log('new event. id %s',eventId)
                    },
                    function(err) {
                        console.log(err)
                    }
                )    
            }
        )
    } catch(err) {
        error="wrongFormat"        
        status = "fallback"
        je = {"fallbackEvent":req.query.event}
        es_api.logUnformattedEvent(je).then (
            function(results) {
                eventId = results._id;
                console.log('new event. id %s',eventId)
            },
            function(err) {
                console.log(err)
            }
        )
    }
        res.send({'status':status,'err:':error,'id':eventId})
})

module.exports = router;
