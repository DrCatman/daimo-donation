export const daimo = {
  // REQUIRED: replace with your App ID
  appId: "pay-demo",
  // Base chain id
  toChain: 8453,
  // Base USDC
  toToken: "0x833589fCD6eDb6E08f4c7C32D4f71B54bdA02913" as const,
  // REQUIRED: destination address to receive funds
  toAddress: "0xc60A0A0E8bBc32DAC2E03030989AD6BEe45A874D",
  // Where to return after donation
  returnUrl: "https://example.org/",
};
