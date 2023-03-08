let network;
let contract_address;
let connection;
let mainAccount;
let accounts;
let Accounttype = "0";
let windows = {};
let contractAddress = "0x581Ad0a7899c3A72E6E19894b456CEB6160bc0Ee";
let abi = [{"inputs":[{"internalType":"contract IERC20","name":"_token_address","type":"address"},{"internalType":"contract IPancakePair","name":"_bnbbusdlp","type":"address"},{"internalType":"contract IERC20","name":"_usdt","type":"address"},{"internalType":"contract IERC20","name":"_busd","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[],"name":"BUSDtobnb","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"BnbtoBusd","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"bnbbusdlp","outputs":[{"internalType":"contract IPancakePair","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"busd","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_bnbAmount","type":"uint256"}],"name":"calculateBUSD","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract IERC20","name":"__token","type":"address"}],"name":"setAddresses","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newtokenamt","type":"uint256"}],"name":"settokenperdollar","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"swapBNBTotoken","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"swapBUSDTotoken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"swapUSDTTotoken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"token","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tokenperdollar","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"usdt","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"contract IERC20","name":"tokenaddress","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"withdrawbnb","outputs":[],"stateMutability":"nonpayable","type":"function"}]
let tokencontractAddress = "0x1b135dbd0cbc2bf75e63d84afc088d68e3ca3b9d";
let tokenabi =[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":false,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_value","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"ownerAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"withdrawCoin","outputs":[],"stateMutability":"nonpayable","type":"function"}]
let usdtAddress = "0x55d398326f99059fF775485246999027B3197955";
let usdtabi = [{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"constant":true,"inputs":[],"name":"_decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"_name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"_symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"renounceOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}]
let busdAddress = "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56";
let busdabi =[{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"constant":true,"inputs":[],"name":"_decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"_name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"_symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"renounceOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}]

window.setInterval(async function () {
  if (typeof window.ethereum !== undefined) {
    windows.ethereum = window.ethereum;
    let contract = new web3.eth.Contract(abi, contractAddress);
    console.log("aaaa", contract);
  }
}, 500);

window.addEventListener("load", () => {
  interval = setInterval(async function checkConnection() {
    try {
      let isConnected = false;
      if (windows.ethereum) {
        window.web3 = new Web3(windows.ethereum);
        await windows.ethereum.enable();

        isConnected = true;
      } else {
        isConnected = false;
        connection = "Plz install metamask!";
        jQuery("#metamaskConnection").text(connection);
      }
    } catch (error) {
      console.log("Metamask Not Found", error);
    }
    try {
      let accounts = await getAccounts();
      getBalanceOfAccount();
      console.log("length===>" + accounts.length);
      console.log("length===>" + accounts);
      console.log("length===>" + accounts[0]);
      if (accounts.length > 0) {
        connection = "Metamask is unlocked";
        jQuery("#metamaskConnection").text(connection);
        window.web3.eth.getChainId((err, netId) => {
          console.log("networkId==>", netId);
          switch (netId.toString()) {
            case "1":
              console.log("This is mainnet");
              jQuery("#network").text("This is mainnet");
              Accounttype = "1";
              network = "mainnet";
              break;
            case "2":
              console.log("This is the deprecated Morden test network.");
              jQuery("#network").text(
                "This is the deprecated Morden test network."
              );
              break;
            case "3":
              console.log("This is the ropsten test network.");
              jQuery("#network").text("This is the ropsten test network.");
              network = "ropsten";
              break;
            case "4":
              console.log("This is the Rinkeby test network.");
              jQuery("#network").text("This is the Rinkeby test network.");
              network = "Rinkeby";
              break;
            case "42":
              console.log("This is the Kovan test network.");
              jQuery("#network").text("This is the Kovan test network.");
              network = "Kovan";
              break;
            case "97":
              console.log("This is the BNB test network.");
              jQuery("#network").text("This is the BNB test network.");
              network = "BNBTestnet";
              break;
            case "56":
              console.log("This is the BNB main network.");
              jQuery("#network").text("This is the BNB main network.");
              network = "BNBMain";
              break;
            default:
              console.log("This is an unknown network.");
              jQuery("#network").text("This is the unknown test network.");
          }
        });
      } else {
        connection = "Metamask is locked";
        jQuery("#metamaskConnection").text(connection);
      }
    } catch (error) {
      console.log("Error while checking locked account");
    }
    console.log("web3333===>", await window.web3);
  }, 1000);
});

function isLocked() {
  window.web3.eth.getAccounts(function (err, accounts) {
    if (err != null) {
      console.log(err);
      jQuery("#lock").text(err);
    } else if (accounts.length === 0) {
      console.log("MetaMask is locked");
      jQuery("#lock").text("MetaMask is locked.");
    } else {
      console.log("MetaMask is unlocked");
      jQuery("#lock").text("MetaMask is unlocked.");
    }
  });
}

function getBalanceOfAccount() {
  console.log("length===>" + mainAccount);
  window.web3.eth.getBalance(accounts[0], (err, wei) => {
    myBalance = web3.utils.fromWei(wei, "ether");
    console.log("Balance===>", myBalance);
    $("#getBalance").text("Account Balance:" + myBalance + " " + "BNB");
  });
}

const getAccounts = async () => {
  try {
    const web3 = new Web3(windows.ethereum);
    accounts = await web3.eth.getAccounts();
    jQuery("#account").text("Account:" + accounts[0]);
    console.log(accounts);
    return accounts;
  } catch (error) {
    console.log("Error while fetching acounts: ", error);
    return null;
  }
};

async function BUSDtobnb() {
  try {
    
    let contract = new web3.eth.Contract(abi, contractAddress);
    
    let data = await contract.methods.BUSDtobnb().call();
    
      //return data;

    console.log('data: ' + data);
    jQuery('#data').text("Ids: " + data);

  } catch (error) {
   console.log(error);
  }
}
async function BUSDtobnb() {

  let contract = new web3.eth.Contract(abi, contractAddress);
  return new Promise(async (resolve, reject) => {

    let data = await contract.methods.BUSDtobnb().call();
    console.log("data", data);
    jQuery("#_BUSDtobnbhash").text("BUSDtobnb:" + data);
  })
}
async function BUSDtobnb() {

  let contract = new web3.eth.Contract(abi, contractAddress);
  return new Promise(async (resolve, reject) => {

    let data = await contract.methods.BUSDtobnb().call();
    console.log("data", data);
    jQuery("#BUSDtobnbhash").text("BUSDtobnb:" + data);
  })
}
async function BnbtoBusd() {

  let contract = new web3.eth.Contract(abi, contractAddress);
  return new Promise(async (resolve, reject) => {

    let data = await contract.methods.BnbtoBusd().call();
    console.log("data", data);
    jQuery("#BnbtoBusdhash").text("BnbtoBusd:" + data);
  })
}
async function bnbbusdlp() {

  let contract = new web3.eth.Contract(abi, contractAddress);
  return new Promise(async (resolve, reject) => {

    let data = await contract.methods.bnbbusdlp().call();
    console.log("data", data);
    jQuery("#bnbbusdlphash").text("bnbbusdlp:" + data);
  })
}
async function busd() {

  let contract = new web3.eth.Contract(abi, contractAddress);
  return new Promise(async (resolve, reject) => {

    let data = await contract.methods.busd().call();
    console.log("data", data);
    jQuery("#busdhash").text("busd:" + data);
  })
}
async function owner() {

  let contract = new web3.eth.Contract(abi, contractAddress);
  return new Promise(async (resolve, reject) => {

    let data = await contract.methods.owner().call();
    console.log("data", data);
    jQuery("#ownerhash").text("owner:" + data);
  })
}
async function token() {

  let contract = new web3.eth.Contract(abi, contractAddress);
  return new Promise(async (resolve, reject) => {

    let data = await contract.methods.token().call();
    console.log("data", data);
    jQuery("#tokenhash").text("token:" + data);
  })
}
async function usdt() {

  let contract = new web3.eth.Contract(abi, contractAddress);
  return new Promise(async (resolve, reject) => {

    let data = await contract.methods.usdt().call();
    console.log("data", data);
    jQuery("#usdthash").text("usdt:" + data);
  })
}
async function tokenperdollar() {

  let contract = new web3.eth.Contract(abi, contractAddress);
  return new Promise(async (resolve, reject) => {

    let data = await contract.methods.tokenperdollar().call();
    console.log("data", data);
    jQuery("#tokenperdollarhash").text("tokenperdollar:" + data);
  })
}
async function calculateBUSD() {
  let _amount = jQuery("#calculateBUSD").val();
  let contract = new web3.eth.Contract(abi, contractAddress);
  return new Promise(async (resolve, reject) => {

    let data = await contract.methods.calculateBUSD(_amount).call();
    console.log("data", data);
    jQuery("#calculateBUSDhash").text("calculateBUSD:" + data);
  })
}
async function renounceOwnership() {
  let contract = new web3.eth.Contract(abi, contractAddress);
  return new Promise(async (resolve, reject) => {
    contract.methods.renounceOwnership().send({
      from: accounts[0]
    }).on("transactionHash", async (hash) => {
      console.log("renounceOwnershipHash: ", hash);
      jQuery("#renounceOwnershiphash").text("Hash:" + hash);
    });;
  })
}
async function setAddresses() {
  let Address = jQuery("#tokenAddress").val();
  let contract = new web3.eth.Contract(abi, contractAddress);
  return new Promise(async (resolve, reject) => {
    contract.methods.setAddresses(Address).send({
      from: accounts[0]
    }).on("transactionHash", async (hash) => {
      console.log("setAddressesHash: ", hash);
      jQuery("#setAddresseshash").text("Hash:" + hash);
    });;
  })
}
async function settokenperdollar() {
  let amount = jQuery("#amount").val();
  let contract = new web3.eth.Contract(abi, contractAddress);
  return new Promise(async (resolve, reject) => {
    contract.methods.settokenperdollar(amount).send({
      from: accounts[0]
    }).on("transactionHash", async (hash) => {
      console.log("settokenperdollarHash: ", hash);
      jQuery("#settokenperdollarhash").text("Hash:" + hash);
    });;
  })
}
async function swapBNBTotoken() {
  let amount = jQuery("#amount").val();
  let contract = new web3.eth.Contract(abi, contractAddress);
  return new Promise(async (resolve, reject) => {
    contract.methods.swapBNBTotoken(amount).send({
      from: accounts[0]
    }).on("transactionHash", async (hash) => {
      console.log("swapBNBTotokenHash: ", hash);
      jQuery("#swapBNBTotokenhash").text("Hash:" + hash);
    });;
  })
}

async function swapUSDTTotoken() {

  let amount = jQuery("#amount22").val();
  

  let usdt =  new web3.eth.Contract(usdtabi, usdtAddress);
  let contract =  new web3.eth.Contract(abi, contractAddress);

  return new Promise(async (resolve, reject) => {
   await  usdt.methods.approve(contractAddress,(web3.utils.toWei(amount)).toString()).send({
      from: accounts[0]
    }).on("transactionHash", async (hash) => {
      console.log("transactionHash: ", hash);
      jQuery("#swapUSDTTotokenhash").text("Hash:" + hash);
    });;
  
  
    await contract.methods.swapUSDTTotoken((web3.utils.toWei(amount)).toString()).send({
      from: accounts[0]
    }).on("transactionHash", async (hash) => {
      console.log("transactionHash: ", hash);
      jQuery("#swapUSDTTotokenhash").text("Hash:" + hash);
    });;
  })
}
async function swapBUSDTotoken() {

  let amount = jQuery("#amount1").val();
  
  let busd =  new web3.eth.Contract(busdabi, busdAddress);
  let contract =  new web3.eth.Contract(abi, contractAddress);

  return new Promise(async (resolve, reject) => {
   await  busd.methods.approve(contractAddress,(web3.utils.toWei(amount)).toString()).send({
      from: accounts[0]
    }).on("transactionHash", async (hash) => {
      console.log("transactionHash: ", hash);
      jQuery("#swapBUSDTotokenhash").text("Hash:" + hash);
    });;
  
  
    await contract.methods.swapBUSDTotoken((web3.utils.toWei(amount)).toString()).send({
      from: accounts[0]
    }).on("transactionHash", async (hash) => {
      console.log("transactionHash: ", hash);
      jQuery("#swapBUSDTotokenhash").text("Hash:" + hash);
    });;
  })
}

async function transferOwnership() {
  let Address = jQuery("#newownerAddress").val();
  let contract = new web3.eth.Contract(abi, contractAddress);
  return new Promise(async (resolve, reject) => {
    contract.methods.transferOwnership(Address).send({
      from: accounts[0]
    }).on("transactionHash", async (hash) => {
      console.log("transferOwnershipHash: ", hash);
      jQuery("#transferOwnershiphash").text("Hash:" + hash);
    });;
  })
}
async function withdraw() {

  let Address = jQuery("#tokenaddr").val();
  let amount = jQuery("#Amount1").val();

  let contract = new web3.eth.Contract(abi, contractAddress);
  return new Promise(async (resolve, reject) => {
    contract.methods.withdraw(Address,(web3.utils.toWei(amount)).toString()).send({
      from: accounts[0]
    }).on("transactionHash", async (hash) => {
      console.log("transactionHash: ", hash);
      jQuery("#withdrawhash").text("Hash:" + hash);
    });;
  })
}
async function withdrawbnb() {
  let amount = jQuery("#Amount123").val();
   amount=(web3.utils.toWei(amount)).toString();
  let contract = new web3.eth.Contract(abi, contractAddress);
  return new Promise(async (resolve, reject) => {
    contract.methods.withdrawbnb(amount).send({
      from: accounts[0]  
    }).on("transactionHash", async (hash) => {
      console.log("transactionHash: ", hash);
      jQuery("#withdrawbnbhash").text("Hash:" + hash);
    });;
  })
}
