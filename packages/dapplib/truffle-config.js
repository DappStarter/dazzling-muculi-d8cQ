require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good armed ozone sugar notice crime remember push gloom problem bottom gate'; 
let testAccounts = [
"0x0a7e5bfb28c348a86cf266a16431de1c67a50f3bf1673fdab7e1ef4887f9e990",
"0xbe1bf96e4f62e866c67796b720b712dba6548514b3497fcd3631fe0ff6825bd5",
"0xdc3839c52a9b8e15dcca1ebc26b06b5fa673155a48f0c61beb4757e5a9a05922",
"0xb8a244329dff28461ca87c8871f1d6dd66b7da4e65a64ef9ef0c88a76c045911",
"0xc417bb0f1fe1b8166912a60eafe9abb5cdcec8356840a611331d1448361ea173",
"0xd27cbb0168026d6408590632a34cd906187b3f4bffeeb9e6772e6372d8824873",
"0xeb640625138ec19313d79fec997aaaaa7ca56c1840f2616be951830426cb0df9",
"0xf796032ed0e887bd8764eac0e8c8aa0f61f2a54c1ee415d357db7a2c19146b40",
"0x73d258b03fe4e8c2a0e48a90f82e1e4f267e92be0c8a809bd6375f99bda48320",
"0x718fee703349aa1ca14766a556d34829860f25322c59724ccc238808ca3355d5"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

