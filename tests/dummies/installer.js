var g = require("../../include");

module.exports = function(scarlet) {
	var dummies = require("./index");
	scarlet.plugins.ioc.initialize();
	return scarlet.plugins.ioc
		.register("anyDependencyA", dummies.AnyDependencyA)
		.register("anyDependencyB", dummies.AnyDependencyB)
		.register("anyDependencyC", dummies.AnyDependencyC)
		.register("anyObject", dummies.AnyObject);

};