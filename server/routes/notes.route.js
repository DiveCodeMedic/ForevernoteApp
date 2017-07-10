//REST is ACTIONS peformed on RESOURCES

const router = require('express').Router();
const db = require('../models')


router.get('/', function(req,res) {
    var promise = db.Note.findAll()
    
    promise.then(function(notes) {
        res.json(notes);
    });
});




module.exports = router;