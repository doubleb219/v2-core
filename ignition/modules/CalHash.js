const {buildModule} = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("CalHash", (m) => {
    const CalHash = m.contract("CalHash", []);
    return { CalHash };
});