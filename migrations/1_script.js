const SimpleStorage = artifacts.require("SimpleStorage");

module.exports = async function(deployer, network, accounts) {
    const valToSend = web3.utils.toWei("1", "ether");
    await deployer.deploy(SimpleStorage, 5, {from: accounts[3], value: `${valToSend}`});
}