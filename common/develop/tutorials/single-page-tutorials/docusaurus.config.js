// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

module.exports = {
    plugins: [
        [
            '@docusaurus/plugin-content-pages',
            {
                id: 'single-page-tutorials',
                path: __dirname,
                include: ['**.{md, mdx}'],
            },
        ],
        [
            '@iota-wiki/plugin-tutorial',
            {
                title: 'Send IOTA Tokens with Javascript',
                description:
                    'In this tutorial you will learn how to send IOTA Tokens in the Devnet.',
                preview: 'send-iota-tokens-with-javascript.png',
                route: 'send-iota-tokens-with-javascript',
                tags: ['text', 'getting-started', 'client', 'js', 'mainnet'],
            },
        ],
        [
            '@iota-wiki/plugin-tutorial',
            {
                title: 'Run a Wasp Node',
                description: 'In this tutorial you will learn how to run a wasp node.',
                preview: 'IOTA-Smart-Contract-Tutorials-A.jpg',
                route: 'smart-contracts/guide/chains_and_nodes/running-a-node',
                tags: ['text', 'video'],
            }
        ],
        [
            '@iota-wiki/plugin-tutorial',
            {
                title: 'Run a Wasp Chain',
                description: 'In this tutorial you will learn how to run a wasp chain.',
                preview: 'IOTA-Smart-Contract-Tutorials-B.jpg',
                route: 'smart-contracts/guide/chains_and_nodes/setting-up-a-chain',
                tags: ['text', 'video'],
            }
        ],
        [
            '@iota-wiki/plugin-tutorial',
            {
                title: 'Deploy a WASM Smart Contract',
                description: 'In this tutorial you will learn how to deploy a wasm smart contract.',
                preview: 'IOTA-Smart-Contract-Tutorials-C.jpg',
                route: 'smart-contracts/guide/chains_and_nodes/setting-up-a-chain#deploying-a-wasm-contract',
                tags: ['text', 'video'],
            }
        ],
        [
            '@iota-wiki/plugin-tutorial',
            {
                title: 'Run a EVM Chain',
                description: 'In this tutorial you will learn how to run an EVM node.',
                preview: 'IOTA-Smart-Contract-Tutorials-D.jpg',
                route: 'smart-contracts/guide/evm/create-chain',
                tags: ['text', 'video'],
            }
        ],
        [
            '@iota-wiki/plugin-tutorial',
            {
                title: 'Deploy Solidity Smart Contract using Remix + Metamask',
                description: 'In this tutorial you will learn how to deploy a solidity smart contract on EVM using remix and metamask.',
                preview: 'IOTA-Smart-Contract-Tutorials-E.jpg',
                route: 'smart-contracts/guide/evm/tooling#remix',
                tags: ['text', 'video'],
            }
        ],
        [
            '@iota-wiki/plugin-tutorial',
            {
                title: 'Deploy Solidity Smart Contract using Hardhat',
                description: 'In this tutorial you will learn how to deploy a solidity smart contract on EVM using hardhat.',
                preview: 'IOTA-Smart-Contract-Tutorials-F.jpg',
                route: 'smart-contracts/guide/evm/tooling#hardhat',
                tags: ['text', 'video'],
            }
        ],
        [
            '@iota-wiki/plugin-tutorial',
            {
                title: 'Generate WASM Smart Contract using Schema Tool',
                description: 'In this tutorial you will learn how to use schema tool to generate smart contract template code on rust and golang',
                preview: 'IOTA-Smart-Contract-Tutorials-G.jpg',
                route: 'smart-contracts/guide/schema/usage',
                tags: ['text', 'video'],
            }
        ],
        [
            '@iota-wiki/plugin-tutorial',
            {
                title: 'Generate WASM Smart Contract using Schema Tool in Typescript',
                description: 'In this tutorial you will learn how to use schema tool to generate smart contract template code on typescript',
                preview: 'IOTA-Smart-Contract-Tutorials-G.jpg',
                route: 'https://www.youtube.com/watch?v=P5HMgmY3DMM',
                tags: ['video'],
            }
        ],
        [
            '@iota-wiki/plugin-tutorial',
            {
                title: 'Send Shimmer Tokens with wallet.rs',
                description:
                    'In this tutorial you will learn how to send Shimmer Tokens with wallet.rs.',
                preview: 'send-shimmer-tokens-with-wallet-lib.png',
                route: 'send-shimmer-tokens-with-wallet-lib',
                tags: ['text', 'wallet', 'getting-started', 'rust', 'testnet'],
            },
        ],
        [
            '@iota-wiki/plugin-tutorial',
            {
                title: 'Interact with IOTA Node Extension (INX)',
                description:
                    'In this tutorial you will learn how to interact with the IOTA Node Extension (INX) interface based on gRPC.',
                preview: 'hornet-inx-interaction.png',
                route: 'hornet-inx-interaction',
                tags: ['text', 'getting-started', 'testnet', 'js'],
            },
        ],
        [
            '@iota-wiki/plugin-tutorial',
            {
                title: 'Tokenless Data Notarization',
                description:
                    'Proove that a block was part of the past Tangle, even if this part of the Tangle was already pruned from network nodes.',
                preview: 'proof-inclusion-of-a-block.png',
                route: 'proof-inclusion-of-a-block',
                tags: ['text', 'getting-started', 'js', 'client'],
            },
        ],
    ],
    staticDirectories: [path.resolve(__dirname, './images')],
};
