import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

export default buildModule("UniswapV2Pair", (m) => {
    const UniswapV2Pair = m.contract("UniswapV2Pair", []);

    // m.call(UniswapV2ERC20, "_mint", [10000]);

    return { UniswapV2Pair };
});