const DitcoinWallet = require('./lib/wallet');
let wallet = new DitcoinWallet();

// //# or with rpc authentification needed

// let wallet = new DitcoinWallet('127.0.0.1', 19092, 'ditrpcuser', 'passwdrpc');

// examples

// //# used when rpc wallet is started with `--wallet-dir` option

// wallet.createWallet('dit_testy', 'testy').then((result) => {
//     console.log(result);
// });

// wallet.openWallet('dit_testy', 'testy').then((result) => {
//     console.log(result);
// });

// //#

// wallet.makeIntegratedAddress().then((result) => {
//     console.log(result);
// });

// wallet.getBalance().then((response) => {
//     console.log(response);
// });
//
// wallet.getAddress().then((response) => {
//     console.log(response);
// });
//
// wallet.getHeight().then((height) => {
//     console.log(height);
// });
//
// wallet.incomingTransfers('all').then((result) =>  {
//     console.log(result);
// });

let body = {
    destinations: {
        address: '9RUGwFu3WGh3wAkeWWzMNiQXiW9ChYRpH974mDdrGcjpEcpPrz143oc9sV1W8YyAUwCztbfxt9usZSMVnSBwPxCaDXzhYWz',
        amount: 1
    }
};
wallet.transfer(body).then((result) => {
   console.log(result);
});
