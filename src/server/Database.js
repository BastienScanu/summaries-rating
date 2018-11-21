const fs = require('fs');
const path = require('path');

const Data = require('./data/database.json');

class Database {

  static load(req, res, next) {
    const datasetId = req.params.datasetId;
    if (datasetId && Data[datasetId]) {
      req.dataset = Data[datasetId];
      return next();
    }
    return res.status(404).send({ message: 'Ressource not found' });
  }

  static getDatasets(req, res) {
    const names = Object.keys(Data);
    return res.status(200).json(names);
  }

  static getAllTopics(req, res) {
    const topics = req.dataset.topics.map(topic => ({ name: topic.name, id: topic.id }));
    return res.status(200).json(topics);
  }

  static findTopic(req, res, next) {
    req.topic = req.dataset.topics.find(t => t.id === req.params.topicId);
    return next();
  }

  static sendTopic(req, res) {
    return res.status(200).send(req.topic);
  }

  static send(req, res) {
    return res.status(200).json(req.data);
  }

  static update(req, res) {
    if (
      req.body &&
      (req.body.index || req.body.index === 0) &&
      req.body.user &&
      (req.body.score || req.body.score === 0)) {
      const topicIndex = req.dataset.topics.findIndex(t => t.id === req.params.topicId);
      Data[req.params.datasetId].topics[topicIndex].systems[req.body.index][`score-${req.body.user}`] = req.body.score;
      const filePath = path.resolve(__dirname, './data/database.json');
      fs.writeFileSync(filePath, JSON.stringify(Data, null, 2));
    }
    return res.status(200).json(req.data);
  }
}

module.exports = Database;
