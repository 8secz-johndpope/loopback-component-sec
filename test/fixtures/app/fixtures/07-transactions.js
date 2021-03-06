const PromiseA = require('bluebird');

const data = [
	{
		id: "1",
		name: "Transaction 1 (inv1)",
		storeId: "A",
		invoiceId: "1"
	},
	{
		id: "2",
		name: "Transaction 2 (inv1)",
		storeId: "A",
		invoiceId: "1"
	},
	{
		id: "3",
		name: "Transaction 3 (inv2)",
		storeId: "B",
		invoiceId: "2"
	},
	{
		id: "4",
		name: "Transaction 4 (inv2)",
		storeId: "B",
		invoiceId: "2"
	}
];

module.exports = function (app) {
	const {Transaction} = app.models;
	return PromiseA.fromCallback(cb => Transaction.create(data, cb));
};
