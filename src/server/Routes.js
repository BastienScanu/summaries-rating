const router = require('express').Router();
const Database = require('./Database');

// Define the model to reference or system, according to the route
router.all('/reference*', Database.model('reference'));
router.all('/system*', Database.model('system'));

// If we have a specific ID we load the asked ressource
router.param('referenceId', Database.load);
router.param('systemId', Database.load);

// Get all the references
router.route('/reference').get(Database.getAll);

// Get a specific reference (references cannot be modified, created nor deleted)
router.route('/reference/:referenceId')
    .get(Database.send);

// Get all the systems
router.route('/system').get(Database.getAll);

// Get a specific system (system cannot be created nor deleted)
router.route('/system/:systemId')
    .get(Database.send)
    .put(Database.update, Database.send);

module.exports = router;