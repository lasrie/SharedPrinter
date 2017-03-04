var SharedPrinter = artifacts.require("./SharedPrinter.sol");

module.exports = function(deployer) {
  deployer.deploy(SharedPrinter);
};
