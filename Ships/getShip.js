//
// usage: clevis contract getShip Ships
//
module.exports = async (contract,params,args)=>{
  return await contract.methods.getShip(args[3]).call()
  /*.then((##outputs##)=>{
    console.log(##results##)
  })*/
}