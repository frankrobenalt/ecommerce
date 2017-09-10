//server requires these packages
// var express = require('express');
// var bodyParser = require('body-parser');
// var fs = require('fs');

// //initialized with express
// var app = express();

// //use json body parser
// app.use(bodyParser.urlencoded({ extended: false }))
// //provide access to static data - css, images, javascript files, etc.
// app.use(express.static('./'));

// //serve the index file
// app.get('/', function(req, res){
//   console.log('requested GET')
//   res.sendfile('index.html');
// });

// //set port to listen on
// var port = process.env.PORT || 3000;
// //server will be listening for requests
// app.listen(port, function(){
//   console.log('Server listening for requests...')
// });

angular.module('trapApp',['ui.router']).config(function($stateProvider, $urlRouterProvider) {
  
      $urlRouterProvider.otherwise('/');
      
        $stateProvider
          .state('home', {
            templateUrl: './templates/home.html',
            url: '/',
            controller: 'mainCtrl'
          });
         
  
  });
  