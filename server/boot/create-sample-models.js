// Copyright IBM Corp. 2015,2016. All Rights Reserved.
// Node module: loopback-example-relations
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

module.exports = function(app) {
    var Client = app.models.Client;
    var Account = app.models.Account;
    var Investment = app.models.Investment;
    var Enterprise = app.models.Enterprise;
  

    app.dataSources.db.automigrate('Client', function(err) {
      if (err) throw err;
  
      var clients = [
        {email: 'test@test.fr', password: 'test', firstname: 'Bob', lastname: "L'éponge"},
        {email: 'test2@test.fr', password: 'test', firstname: 'Jon', lastname: 'Snow'},
        {email: 'test3@test.fr', password: 'test', firstname: 'Sonic', lastname: 'Le Hérisson'},
        ];
      var accounts = [
        {
          sold: 3000,
          name: 'Livret A'
        },{
          sold: 600,
          name: 'Livret A'
        },{
          sold: 854,
          name: 'Livret A'
        },{
          sold: 782,
          name: 'Livret A'
        }
      ];
      var enterprises = [
        {
          name: 'Samsung',
          isSafe: true,
          activity: 'Electronique',
          description: "Entreprise majeur d'électronique",
          localisation: "Corée"
        }
      ];
      var investments = [
        {
          sum: '800'
        }
      ]
      
      // Create data
      Enterprise.create(enterprises[0], function(err, instance) {
        if (err) return console.error(err);
        console.log('Entreprise created: ', instance);
      })

      Client.create(clients[0], function(err, instance) {
        if (err) return console.error(err);
        console.log('Client created: ', instance);
        accounts[0].clientId = instance.id;
        accounts[3].clientId = instance.id;

        Account.create(accounts[0], function(err, instance) {
          if (err) return console.error(err);
          console.log('Account created: ', instance);
          investments[0].enterpriseId = instance.id
          Investment.create(investments[0], function(err, instance){
            if (err) return console.error(err);
            console.log('Investment created: ', instance)
          })
        });
        Account.create(accounts[3], function(err, instance) {
          if (err) return console.error(err);
          console.log('Account created: ', instance);
        });
      });

      Client.create(clients[1], function(err, instance) {
        if (err) return console.error(err);
        console.log('Client created: ', instance);
        accounts[1].clientId = instance.id;

        Account.create(accounts[1], function(err, instance) {
          if (err) return console.error(err);
          console.log('Account created: ', instance);
        });
      });

      Client.create(clients[2], function(err, instance) {
        if (err) return console.error(err);
        console.log('Client created: ', instance);
        accounts[2].clientId = instance.id;

        Account.create(accounts[2], function(err, instance) {
          if (err) return console.error(err);
          console.log('Account created: ', instance);
        });
      });
    });
  };
  