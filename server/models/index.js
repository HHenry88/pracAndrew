const db = require('../db/index.js');

module.exports = {
  units: {
    get: function(cb){
      var queryStr = 'SELECT * FROM units';

      db.query(queryStr, function(err, results){
        cb(err, results);
      });
    },

    post: function(unitInfo){
      var queryStr = 'INSERT INTO units SET ?';

      db.query(queryStr, function(err, results){
        console.log('201');
      })
    }
  },

  building: {
    get: function(cb){
      var queryStr = "SELECT * FROM building";

      db.query(queryStr, function(err, results){
        cb(err, results);
      })
    },
    post: function(buildingData){
      var queryStr = 'INSERT INTO units SET ?';

      db.query(queryStr, function(err, results){
        console.log('201');
      })
    }
  }
}
