export const daimo = {
  // REQUIRED: replace with your App ID
  appId: "pay-dsro-k8FUu4522lQwP",
  // Base chain id
  toChain: 10,
  // Base USDC
  toToken: "0x0000000000000000000000000000000000000000" as const,
  //toToken: "0x833589fCD6eDb6E08f4c7C32D4f71B54bdA02913" as const,
  // REQUIRED: destination address to receive funds
  toAddress: "0xc25132E7B939D689d402B11E3831b0b31a521Ab6",
  // Where to return after donation
  returnUrl: "https://www.avalonhouse.org/",
};
