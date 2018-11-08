const fs = require('fs');
const path = require('path');

const References = require('./data/example_references.json');
const Systems = require('./data/example_systems.json');

const Data = {
  reference: References,
  system: Systems,
};

class Database {
  static model(model) {
    return (req, res, next) => {
      req.model = model;
      return next();
    };
  }

  static load(req, res, next) {
    const model = req.model;
    if (Data[model] && Data[model][req.params[`${model}Id`]]) {
      req.data = Data[model][req.params[`${model}Id`]];
      return next();
    }
    return res.status(404).send({ message: 'Ressource not found' });
  }

  static getAll(req, res) {
    return res.status(200).json(Data[req.model]);
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
      Systems[req.params.systemId][req.body.index][`score-${req.body.user}`] = req.body.score;
      const filePath = path.resolve(__dirname, './data/example_systems.json');
      fs.writeFileSync(filePath, JSON.stringify(Systems, null, 2));
    }
    return res.status(200).json(req.data);
  }
}

module.exports = Database;
