const SimpleStorage = artifacts.require("./SimpleStorage.sol"); // import de l'artifact du SC (build/contracts/...)

contract("SimpleStorage", accounts => {
    it("...should store the value 89.", async () => {
        const simpleStorageInstance = await SimpleStorage.deployed();

        await simpleStorageInstance.set(89, { from: accounts[0] }); // c'est le compte 0 qui va lancer la tx
 
        const storedData = await simpleStorageInstance.get.call(); // call() pour recevoir la valeur retournée pas le get

        assert.equal(storedData, 89, "The value 89 was not stored."); // assert.equal fourni par Mocha
    });

    // on peut avoir plusieurs 'it'
});