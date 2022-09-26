const account1 = {
  owner: "Iniodu Udosoh",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  ppassword: 2222,
};
const account2 = {
  owner: "Nsisong Udosoh",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  password: 2222,
};

const account3 = {
  owner: "Ekpono Maurice",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  password: 3333,
};

const account4 = {
  owner: "Emmedion Immanuel",
  movements: [430, 1000, 700, 50, 90],
  password: 4444,
};
const accounts = [account1, account2, account3, account4];

let usernamelogin = document.querySelector("#username");
let passwordlogin = document.querySelector("#password");
let submitLogin = document.querySelector(".loginsubmit");
let summary = document.querySelector(".summary");
let balances = document.querySelector(".number");

const creatUsername = function (accounts) {
  accounts.forEach((acc) => {
    acc.username = acc.owner.toLowerCase().split(" ")[0];
  });
};
creatUsername(accounts);
console.log(accounts);

const displaytransactions = function (movement) {
  summary.innerHTML = "";
  movement.forEach(function (val, i) {
    console.log(val);

    let type = val > 0 ? "deposit from" : "transfer to";
    let str = `<div class="transactions">
            <div class="date">
              <p>Thursday, 11 August</p>
            </div>
            <div class="transacts">
              <div class="label">
                <div class="bank">
                  <img alt="logo" src="./image/GOtv_2015_logo.svg.png" />
                </div>
                <div class="account">
                  <div class="owner">Iniodu Udosoh</div>
                  <div class="transactiontype">
                    a ${type} "INIODU UDOSOH"
                  </div>
                </div>
              </div>
              <div class="amount moneyout ${type}"> ${val}N </div>
            </div>
          </div>`;

    summary.insertAdjacentHTML("afterbegin", str);
  });
};



const calculatebalance = function (movement) {
    let balance = movement.reduce((acc, val, i) => acc + val, 0);
    balances.innerHTML = `${balance}N`
   
    
};

calculatebalance(account1.movements)
displaytransactions(account1.movements);
