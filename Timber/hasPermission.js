//
// usage: clevis contract hasPermission Timber
//
module.exports = async (contract,params,args)=>{
  return await contract.methods.hasPermission(args[3],args[4]).call()
  /*.then((##outputs##)=>{
    console.log(##results##)
  })*/
}