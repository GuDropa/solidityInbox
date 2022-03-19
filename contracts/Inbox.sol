pragma solidity ^0.8.9;
// linter warnings (red underline) about pragma version can igonored!

// contract code will go here
contract Inbox {
  string public message;

  function constructor(string memory _initialMessage) public {
    message = _initialMessage;
  }

  function setMessage(string memory _newMessage) public {
    message = _newMessage;
  }
}