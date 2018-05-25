pragma solidity ^0.4.15;

/*

  https://galleass.io
  by Austin Thomas Griffith

  The Village is where food is consumed and citizens are created
*/

import 'Galleasset.sol';
import 'zeppelin-solidity/contracts/ownership/Ownable.sol';

contract Village is Galleasset, Ownable {

  /* right now the village contract represents all of the villages but
    it has a single land owner and inventory
    it could easily have an array to track who is the land owner where,
    but it might be trickier to have and inventory of every village
    maybe not, maybe it's just 677ed in, you transfer the Fillet and
    then call a function on the village that increments the inventory
    for a specific village
  */

  //uint16 landx;
  //uint16 landy;
  //uint8 landtile;
  address public landowner;

  function Village(address _galleass) public Galleasset(_galleass) { }
  function () public {revert();}

  function onTokenTransfer(address _sender, uint _amount, bytes _data) {
    /*if( msg.sender == getContract("Timber") ){
      TokenTransfer(msg.sender,_sender,_amount,_data);
    }else{
      revert();
    }*/
  }
  event TokenTransfer(address token,address sender,uint amount,bytes data);

  //standard tile interface
  //called when tile is purchased from Land contract
  function onPurchase(uint16 _x,uint16 _y,uint8 _tile,address _owner,uint _amount) public returns (bool) {
    //landx=_x;
    //landy=_y;
    //landtile=_tile;
    landowner=_owner;
  }

  function createCitizen() public returns (uint) {
    require(msg.sender==landowner);
    Citizens citizensConract = Citizens(getContract("Citizens"));
    return citizensConract.createCitizen(msg.sender,"Fillet","Fillet","Fillet");
  }

  function withdraw(uint256 _amount) public onlyOwner isBuilding returns (bool) {
    require(this.balance >= _amount);
    assert(owner.send(_amount));
    return true;
  }
  function withdrawToken(address _token,uint256 _amount) public onlyOwner isBuilding returns (bool) {
    StandardToken token = StandardToken(_token);
    token.transfer(msg.sender,_amount);
    return true;
  }
}

contract Citizens {
  function createCitizen(address owner, bytes32 food1, bytes32 food2, bytes32 food3) returns (uint){ }
}

contract StandardToken {
  function transfer(address _to, uint256 _value) public returns (bool) { }
}