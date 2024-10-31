import { defineChain } from 'viem';

export const apechain = {
    id: 33139,
    name: 'ApeChain',
    network: 'apechain',
    nativeCurrency: {
        decimals: 18,
        name: 'ApeCoin',
        symbol: 'APE',
    },
    rpcUrls: {
        default: {http: ['https://apechain.gateway.tenderly.co/5wbckb1kVS04v3NbwvDohG']},
    },
    blockExplorers: {
        default: {name: 'Explorer', url: 'https://apescan.io/'},
    },
    contracts: {
        gizmoCat: {
            address: '0x5756f9a241786e087c8ad076fba8a4d650ace6c7' as `0x${string}`,
            abi: [
                {
                    "inputs": [],
                    "name": "totalSupply",
                    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
                    "stateMutability": "view",
                    "type": "function"
                },
                {
                    "inputs": [{"internalType": "uint256", "name": "quantity", "type": "uint256"}],
                    "name": "mint",
                    "outputs": [],
                    "stateMutability": "payable",
                    "type": "function"
                }
            ],
        },
    },
}
