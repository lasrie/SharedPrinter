// Specifically request an abstraction for SharedPrinter.sol
var SharedPrinter = artifacts.require("./SharedPrinter.sol");


contract('SharedPrinter', function(accounts) {
  it("printer should not be available after initiating print", function() {
	  var instance;
    return SharedPrinter.deployed().then(function(inst) {
		instance = inst;
		instance.startPrint.call(0);
		return instance.status.call();
	}).then(function(result){
			 assert.equal(result.valueOf(), 0, "Printer is still available");	
			});
					
		});
    });
 