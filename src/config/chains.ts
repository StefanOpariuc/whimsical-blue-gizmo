import { Chain } from '@rainbow-me/rainbowkit';

export const apechain = {
  id: 33139,
  name: 'ApeChain',
  network: 'apechain',
  iconUrl: 'https://ipfs.io/ipfs/QmcyHSQnd747pd7EmtobQd12vh4vvyYYvnNNQqKrG12ky1',
  iconBackground: '#000',
  nativeCurrency: {
    decimals: 18,
    name: 'ApeCoin',
    symbol: 'APE',
  },
  rpcUrls: {
    public: { http: ['https://mainnet.apechain.com/'] },
    default: { http: ['https://mainnet.apechain.com/'] },
  },
  blockExplorers: {
    default: { name: 'Explorer', url: 'https://explorer.apechain.com' },
  },
  contracts: {
    gizmoCat: {
      address: '0x34070Cf1264a0ccC9824c8f5E6C2Fc42e6B1BF43',
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
} as const satisfies Chain;