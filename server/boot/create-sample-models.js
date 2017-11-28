// Copyright IBM Corp. 2015,2016. All Rights Reserved.
// Node module: loopback-example-relations
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

module.exports = function(app) {
    var Client = app.models.Client;
    var Account = app.models.Account;
  

    app.dataSources.db.automigrate('Customer', function(err) {
      if (err) throw err;
  
      var clients = [
        {email: 'test@test.fr', password: 'test', firstname: 'Marius', lastname: 'Usvat'},
        {email: 'test2@test.fr', password: 'test', firstname: 'Mathieu', lastname: 'Meyer'},
        {email: 'test3@test.fr', password: 'test', firstname: 'Thomas', lastname: 'Fournet'},
        {email: 'test4@test.fr', password: 'test', firstname: 'Paul', lastname: 'Boré'},
        {email: 'test5@test.fr', password: 'test', firstname: 'Xavier', lastname: 'Cobigo'}
        ];
      var accounts = [
        {
          sold: 3000,
          name: 'Livret A'
        }
      ];
  
      // Create customers and orders
      Client.create(client[0], function(err, instance) {
        if (err) return console.error(err);
        console.log('Customer created: ', instance);
        accounts[0].clientId = instance.id;

        Account.create(accounts[0], function(err, instance) {
          if (err) return console.error(err);
          console.log('Order created: ', instance);
        });
      });
    });
  };
  