//SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

import {Ownable} from "openzeppelin-solidity/contracts/access/Ownable.sol";

contract coffee is Ownable(msg.sender) {
    function buyCoffee() public payable returns (string memory message) {           // deposite function
        return "Thanks for buying me coffee";
    }

        //withdraw function 
    function withdraw() public onlyOwner payable {                      
        payable(msg.sender).transfer(address(this).balance);
    }
}
