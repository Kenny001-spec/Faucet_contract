import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const FaucetModule = buildModule("FaucetModule", (m) => {
  const faucet = m.contract("ClaimFaucet", ["Dlttoken", "DLT"]);
 
    return { faucet };
  
});

export default FaucetModule;
