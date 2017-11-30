'use strict';

var SampleCreator = (app) => {
	var Client = app.models.Client;
    var Account = app.models.Account;
    var Investment = app.models.Investment;
	var Enterprise = app.models.Enterprise;
	
	var clients = require('./data/clients');
	var accounts = require('./data/accounts');
	var enterprises = require('./data/enterprises');

	// Create companies
	Array.from(enterprises).forEach((enterprise) => {
		Enterprise.create(enterprise, (err, instance) => {
			if (err) { return console.error(err) };
			console.log('Entreprise created: ', instance.name);
		});
	});

	// Create client
	Client.create(clients[0], (err, instance) => {
		if (err) { return console.error(err) };
		console.log('Client created: ', instance.email);

		accounts[0].clientId = instance.id;
		accounts[1].clientId = instance.id;
		accounts[2].clientId = instance.id;
		accounts[3].clientId = instance.id;
		accounts[4].clientId = instance.id;

		// Create accounts
		accounts.forEach((account) => {
			Account.create(account, (err, instance) => {
				if (err) { return console.error(err) };
				console.log('Account created: ', instance.idTag);

				if (instance.type === "investment") {
					let sum = Math.round(Math.random() * instance.sold);
					let selectedEnterprise = Math.floor(Math.random() * 4) + 1;  
					Investment.create({ sum: sum, accountId: instance.id, enterpriseId: selectedEnterprise}, (err, instance) => {
						if (err) { return console.error(err) };
						console.log('Investment created: ', instance.sum);
					});
				}
			});
		});
	});
}

module.exports = SampleCreator;
  