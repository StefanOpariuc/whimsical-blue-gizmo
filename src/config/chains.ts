import { defineChain } from 'viem';

export const apechain = defineChain({
  id: 33139,
  name: 'ApeChain',
  network: 'apechain',
  nativeCurrency: {
    decimals: 18,
    name: 'ApeCoin',
    symbol: 'APE',
  },
  rpcUrls: {
    default: { http: ['https://mainnet.apechain.com/'] },
  },
  blockExplorers: {
    default: { name: 'Explorer', url: 'https://explorer.apechain.com' },
  },
  contracts: {
    gizmoCat: {
      address: '0x34070Cf1264a0ccC9824c8f5E6C2Fc42e6B1BF43' as `0x${string}`,
      abi: [
        {
          "inputs": [],
          "name": "totalSupply",
          "outputs": [{"internalType": "uint256","name": "","type": "uint256"}],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [{"internalType": "uint256","name": "quantity","type": "uint256"}],
          "name": "mint",
          "outputs": [],
          "stateMutability": "payable",
          "type": "function"
        }
      ],
    },
  },
});