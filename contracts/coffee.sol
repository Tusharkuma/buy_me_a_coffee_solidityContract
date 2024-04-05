//SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

import {Ownable} from "openzeppelin-solidity/contracts/access/Ownable.sol";

contract coffee is Ownable {
    function buyCoffee() public payable returns (string memory message) {
        return "Thanks for buying me coffee";
    }

    function withdraw() public payable onlyOwner {
        payable(msg.sender).transfer(address(this).balance);
    }
}
