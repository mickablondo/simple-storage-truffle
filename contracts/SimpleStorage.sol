// SPDX-License-Identifier: GPL-3.0
pragma solidity 0.8.19;
 
contract SimpleStorage {
   uint data;

   constructor(uint _data) payable {
       data = _data;
   }

   function set(uint x) public {
       data = x;
   }
 
   function get() public view returns (uint) {
       return data;
   }
}
