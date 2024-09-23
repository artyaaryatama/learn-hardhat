// SPDX-License-Identifier: MIT

pragma solidity 0.8.27;

contract Learn {

  string public textRaw;
  address private owner;
  uint256 public number;

  constructor(){
    owner = msg.sender;
  }

  function setText(string calldata _text) external {
    textRaw = _text;
  }

  function increment() external {
    require(msg.sender == owner, "NOT OWNER");

    number++;
  }

  function getOwner() public view returns(address) {
    return owner;
  }
}