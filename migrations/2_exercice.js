const SimpleStorage = artifacts.require("SimpleStorage");

module.exports = async function(deployer, network, accounts) {
    if(network == "development") {
        try {
            const instance = await SimpleStorage.deployed();
            let result = await instance.get();
            console.log(result.toString());
            await instance.set(12);
            result = await instance.get();
            console.log(result.toString());

            web3.eth.getAccounts().then(console.log);
            let balance = await web3.eth.getBalance(instance.address);
            console.log(web3.utils.fromWei(balance, "ether"));
        } catch (error) {
            console.error('Error : ', error);
        }
    }
}