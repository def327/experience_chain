const ExperienceChain = artifacts.require("./ExperienceChain.sol")

module.exports = function(deployer) {
	deployer.deploy(ExperienceChain);
};