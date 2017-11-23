var AnoCoin = artifacts.require("./AnoCoin.sol");

module.exports = function(deployer) {
  deployer.deploy(AnoCoin);
};
