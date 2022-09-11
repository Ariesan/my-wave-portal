const { hexStripZeros } = require("ethers/lib/utils");

const main = async () => {
    const waveContractFactory = await hre.ethers.getContactFactory("WavePortal");
    const waveContract = await waveContractFactory.deploy();
    await waveContract.deployed();
    console.log("Contract  deployed to:", waveContract.address);
};

const runMain = async () => {
    try {
        await main();
        process.exit(0); //exit Node process without error
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

runMain();