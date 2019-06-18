/**
 * Module dependencies.
 */


var mongoose = require('mongoose'),
  userModel = mongoose.model('TestUser')

exports.create = async function(req, res) {
  if (req.body.name && req.body.password && req.body.email) {
        var user = new userModel(req.body);
     await   user.save(function(err, response) {
          if (response) {
            console.log("tres");
          }
          else{
              console.log(error)
          }
  
        });
      } 
};