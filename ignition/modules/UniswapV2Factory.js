const {buildModule} = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("UniswapV2Factory", (m) => {
    const UniswapV2Factory = m.contract("UniswapV2Factory", ["0xd86C9223842C2544210A9A06646cECb3Deb4eE2c"]);

    // m.call(UniswapV2ERC20, "_mint", [10000]);

    return { UniswapV2Factory };
});