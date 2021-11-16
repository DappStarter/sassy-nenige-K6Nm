require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict argue system venture street crawl rifle coconut gown light army genuine'; 
let testAccounts = [
"0x5b57ef1fa3daf43b530cda3c2bef22676f0d4201006c7923c10ebcd90da0ef17",
"0x729b483978639e5fa8954a5e4746183f53acedca87036d0ccd814e24eeba8d89",
"0x438adb6f89a3708d3bf749f609ca04d95ba1e1d583cba34a4b58c01168c8cbcd",
"0xa728dca2d2ec6b1e822cf20ac3e1018fab3dfc7e5b4e316a7dc22097bef3175b",
"0xd6ad9340cc50aff3826631e910b2b160d7096accae349e119b1b46015b078419",
"0xd4b7e7a3b46b582b9f45f7911e1f89b8cab1d77ada7243f5de72dae4b94d911d",
"0x1c8c68169af60d3d4e90de129a891418504f2523eb493b1703b6e9dbab0839a5",
"0x050d41ab468af24d13b530ff5cdf68706b2728938b39d94a83b4c7f574d4880d",
"0x8e63f1ed314c77b550b633d92f82f04e21116f2020ced6540f8483d67fc49db0",
"0x57c2fde4829c5373937fb4487c4ffc997848984f25ee250f52caf55504a9fd26"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

