pragma solidity ^0.4.4;

contract SharedPrinter {
  address public owner;
  uint public printer_status;

  event PrintStarted (uint id);
  event PrintFinished (uint id);
  
  modifier restricted() {
    if (msg.sender == owner) _;
  }

  function SharedPrinter() {
    owner = msg.sender;
  }

  function startPrint(uint id) public{
	printer_status = 0;
	PrintStarted(id);
  }
  
  function finishPrint(uint id){
	printer_status = 1;
	PrintFinished(id);
  }
  
  function status() returns (uint){
		return printer_status;
  }
  
  function destroy(){
	if(msg.sender == owner){
		suicide(owner);
	}
  }
}
