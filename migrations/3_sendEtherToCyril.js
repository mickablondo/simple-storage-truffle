const Send = artifacts.require("Send");

module.exports = async function(deployer, network, accounts) {
    if(network == "development") {
        try {
            await deployer.deploy(Send);
            const instance = await Send.deployed();
            await instance.setAddr("0x52Ffb08546eEEb0f275B501D5f536Ec446541756");
            await instance.sendEth();
        } catch (error) {
            console.error('Error : ', error);
        }
    }
}