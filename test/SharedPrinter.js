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
		
  it("Correct Event is triggered on StartPrint", function() {
    var instance;
    return SharedPrinter.deployed().then(function(inst) {
		instance = inst;
		return instance.startPrint(0);
	}).then(function(result){
		var event = "none";
		for (var i = 0; i < result.logs.length; i++) {
			var log = result.logs[i];

			if (log.event == "PrintStarted") {
				// We found the event!
				event = log.event;
				break;
			}
		}
		assert.equal(event, "PrintStarted", "PrintStarted Event was not fired");
	
			});
					
		});
    });
 