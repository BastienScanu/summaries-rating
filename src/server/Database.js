const References = require('./data/example_references.json');
const Systems = require('./data/example_systems.json');
const Data = {
  reference: References,
  system: Systems
};

class Database {

  static model(model) {
    return (req, res, next) => {
      console.log(model);
      req.model = model;
      return next();
    }
  };

  static load(req, res, next) {
    const model = req.model;
    if (Data[model] && Data[model][req.params[`${model}Id`]]) {
      req.data = Data[model][req.params[`${model}Id`]];
      return next();
    } else {
      return res.status(404).send({message: 'Ressource not found'});
    }
  };

  static getAll(req, res) {
    console.log('all');
    return res.status(200).json(Data[req.model]);
  }

  static send(req, res) {
    return res.status(200).json(req.data);
  };

  static update(req, res, next) {
    //TODO
    return next();
  }
}

module.exports = Database;