const router = require('express').Router();
const Database = require('./Database');

// Get all the datasets names
router.route('/dataset/').get(Database.getDatasets);

// If we have a specific ID we load the asked ressource
router.param('datasetId', Database.load);
router.param('topicId', Database.findTopic);

// Get all the topics names of a given dataset
router.route('/dataset/:datasetId/topic').get(Database.getAllTopics);

// Get all the data of a specific topic
router.route('/dataset/:datasetId/topic/:topicId')
  .get(Database.sendTopic)
  .put(Database.update, Database.send);

module.exports = router;
