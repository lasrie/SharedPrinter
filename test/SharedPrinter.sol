pragma solidity ^0.4.4;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/SharedPrinter.sol";

contract TestSharedPrinter {
  function testAvailability() {
    SharedPrinter printer = SharedPrinter(DeployedAddresses.SharedPrinter());
	printer.startPrint(0);
    uint expected = 0x0;
   uint result = printer.status();
  
    Assert.equal(result, expected, "Printer should not be available");
  }

}