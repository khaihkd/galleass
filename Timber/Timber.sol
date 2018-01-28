pragma solidity ^0.4.15;

/*

  https://galleass.io
  by Austin Thomas Griffith

  Timber is harvested from forest tiles and used to build ships and buildings.

*/

import 'Galleasset.sol';
import 'ERC677Token.sol';
import 'zeppelin-solidity/contracts/ownership/HasNoEther.sol';
import 'zeppelin-solidity/contracts/token/MintableToken.sol';

contract Timber is Galleasset, HasNoEther, MintableToken, ERC677Token {

  string public constant name = "Galleass Timber";
  string public constant symbol = "G_TIMBER";
  uint8 public constant decimals = 0;

  uint256 public constant INITIAL_SUPPLY = 0;

  function Timber(address _galleass) Galleasset(_galleass) public {
    totalSupply = INITIAL_SUPPLY;
  }

}
