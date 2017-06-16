const models = require('../models/index.js');


module.exports = {
  units: {
    get: function(req,res){
      models.units.get(function(){
        res.send(data);
      })
    },
    post: function(req,res){
      res.send(models.units.post(req.body));
    }
  },
  building: {
    get: function(req, res){
      models.building.get(function(){
        res.send(data);
      })
    },
    post: function(req,res){
      res.send(models.building.post(req.body));
    }
  }
}
