var async = require('async');

// api endpoints
module.exports = function(app, passport, auth) {
    var users = require('../app/controllers/users');
    var userController = require('../app/controllers/userController')
  
    //get api
    app.get('/users/:userId', users.show);

    //Setting up the users api
    app.post('/users', userController.create);


};
