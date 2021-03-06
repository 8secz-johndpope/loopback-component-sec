const PromiseA = require('bluebird');

const data = [
	{
		id: "1",
		userId: "admin",
		roleId: "admin",
		scope: null,
		state: "active"
	},
	{
		id: "2",
		userId: "userAdminA",
		roleId: "roleAdminA",
		scope: "Store",
		scopeId: "A",
		state: "active"
	},
	{
		id: "3",
		userId: "userManagerA",
		roleId: "roleManagerA",
		scope: "Store",
		scopeId: "A",
		state: "active"
	},
	{
		id: "4",
		userId: "userMemberA",
		roleId: "roleMemberA",
		scope: "Store",
		scopeId: "A",
		state: "active"
	},
	{
		id: "5",
		userId: "userAdminB",
		roleId: "roleAdminB",
		scope: "Store",
		scopeId: "B",
		state: "active"
	},
	{
		id: "6",
		userId: "userManagerB",
		roleId: "roleManagerB",
		scope: "Store",
		scopeId: "B",
		state: "active"
	},
	{
		id: "7",
		userId: "userMemberB",
		roleId: "roleMemberB",
		scope: "Store",
		scopeId: "B",
		state: "active"
	}
];

module.exports = function (app) {
	const {SecMembership} = app.models;
	return PromiseA.fromCallback(cb => SecMembership.create(data, cb));
};
