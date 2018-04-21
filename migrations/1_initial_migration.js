var ExperienceChain = artifacts.require("./ExperienceChain.sol");
var Migrations = artifacts.require("./Migrations.sol");

module.exports = function(deployer) {
  deployer.deploy(Migrations).then(function(){
  	return deployer.deploy(ExperienceChain);
  }).then(function(){
 	console.log("complete!")
  })
  
};
