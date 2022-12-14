const account1 = {
  owner: "Iniodu Udosoh",
  movements: [600, 1400, -150, -790, -3210, -1000, 8500, -30],
  password: 1111,
  recipent: [
    "Otobong",
    "Daddy",
    "Sweet heart",
    "Mumy Joy",
    "Poseidon",
    "Ediomo",
    "Erinma love",
    "Crush",
  ],
  movementDate: [
    "2019-11-18T21:13:54.178Z",
    "2019-11-20T21:08:17.108Z",
    "2019-11-31T21:21:30.578Z",
    "2019-11-31T21:21:30.578Z",
    "2020-01-02T21:11:37.448Z",
    "2020-04-11T21:00:47.111Z",
    "2021-06-28T21:23:10.666Z",
    "2021-12-02T21:03:05.178Z",
  ],
};
const account2 = {
  owner: "Nsisong Udosoh",
  movements: [50000, 700, -150, -9090, -3210, -76000, 85000, -30],
  password: 2222,
  recipent: [
    "Samuel",
    "Glory",
    "Sweet heart",
    "DSTV guy",
    "Dickson",
    "Grand Ma",
    "Erinma Blessing",
    "Land Lord",
  ],
  movementDate: [
    "2019-11-18T21:13:54.178Z",
    "2019-11-20T21:08:17.108Z",
    "2019-11-31T21:21:30.578Z",
    "2020-01-02T21:11:37.448Z",
    "2020-01-02T21:11:37.448Z",
    "2020-04-11T21:00:47.111Z",
    "2021-06-28T21:23:10.666Z",
    "2021-12-02T21:03:05.178Z",
  ],
};

const account3 = {
  owner: "Ekpono Maurice",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  password: 3333,
  recipent: [
    "Dorathy",
    "Anita",
    "Pretty",
    "LOML",
    "Sugar Mummy",
    "DEar Sis",
    "Emmedion Obot",
    "Iniodu Udosoh",
  ],
  movementDate: [
    "2019-11-18T21:13:54.178Z",
    "2019-11-20T21:08:17.108Z",
    "2019-11-31T21:21:30.578Z",
    "2020-01-02T21:11:37.448Z",
    "2020-01-02T21:11:37.448Z",
    "2020-04-11T21:00:47.111Z",
    "2021-06-28T21:23:10.666Z",
    "2021-12-02T21:03:05.178Z",
  ],
};

const account4 = {
  owner: "Emmediong Immanuel",
  movements: [-430, -1000, -700, 5000000, -90, 6 - 00, -5000, 8000],
  password: 4444,
  recipent: [
    "Nsisong",
    "Daddy",
    "ife",
    "Dear Mum",
    "Ifreke",
    "Uduak enyoung",
    "Colleauge",
    "Emma Love",
  ],
  movementDate: [
    "2019-11-18T21:13:54.178Z",
    "2019-11-20T21:08:17.108Z",
    "2019-11-31T21:21:30.578Z",
    "2019-11-31T21:21:30.578Z",

    "2020-01-02T21:11:37.448Z",
    "2020-04-11T21:00:47.111Z",
    "2021-06-28T21:23:10.666Z",
    "2021-12-02T21:03:05.178Z",
  ],
};
const accounts = [account1, account2, account3, account4];

let usernamelogin = document.querySelector("#username");
let passwordlogin = document.querySelector("#password");
let submitLogin = document.querySelector(".loginsubmit");
let summary = document.querySelector(".summary");
let balances = document.querySelector(".number");
let apppage = document.querySelector(".con");
let loginpage = document.querySelector(".login");
let transfername = document.querySelector(".accountname");
let transferno = document.querySelector(".ammountno");
let send = document.querySelector(".sendbutton");
let welcomebk = document.querySelector(".acc");
let switchacc = document.querySelector(".switch");

const creatUsername = function (accounts) {
  accounts.forEach((acc) => {
    acc.username = acc.owner.toLowerCase().split(" ")[0];
  });
};
creatUsername(accounts);

const displaytransactions = function (acco) {
  summary.innerHTML = "";

  let dave = acco.recipent.map(function (val, i) {
    return val;
  });

  acco.movements.forEach(function (val, i) {
    const date = new Date(acco.movementDate[i]);
    const day = `${date.getDate()}`.padStart(2, 0);
    const month = `${date.getMonth() + 1}`.padStart(2, 0);
    const year = date.getFullYear();
    const dispalydate = `${day}/ ${month}/ ${year}`;

    let transType = val > 0 ? "CREDIT" : "DERBIT";
    let type = val > 0 ? "deposit from" : "transfer to";
    let str = `<div class="transactions">
            <div class="date">
              <p>${dispalydate}</p>
            </div>
            <div class="transacts">
              <div class="label">
                <div class="bank">
                  <img alt="logo" src="./image/GOtv_2015_logo.svg.png" />
                </div>
                <div class="account">
                  <div class="owner">${transType}</div>
                  <div class="transactiontype">
                    a ${type} <span class="namess" >${dave[i]}</span>
                  </div>
                </div>
              </div>
              <div class="amount moneyout ${type}"> ${val} N </div>
            </div>
          </div>`;

    summary.insertAdjacentHTML("afterbegin", str);
  });
};

let balance;

const calculatebalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, val, i) => acc + val, 0);
  balances.innerHTML = `${acc.balance} N`;
};

let currentacount;

submitLogin.addEventListener("click", function (e) {
  e.preventDefault();
  currentacount = accounts.find((acc) => acc.username === usernamelogin.value);

  if (
    currentacount?.username === usernamelogin.value &&
    currentacount.password === Number(passwordlogin.value)
  ) {
    apppage.classList.remove("val");
    loginpage.classList.add("val");
    usernamelogin.value = "";
    passwordlogin.value = "";
    calculatebalance(currentacount);
    displaytransactions(currentacount);
    welcomebk.innerHTML = `welcome back ${currentacount.owner}`;
  }
});

send.addEventListener("click", function (e) {
  e.preventDefault();
  reciver = accounts.find((val) => val.username === transfername.value);
  let ammount = Number(transferno.value);
  const date = new Date();
  const day = `${date.getDate()}`.padStart(2, 0);
  const month = `${date.getMonth() + 1}`.padStart(2, 0);
  const year = date.getFullYear();

  console.log(reciver);

  if (
    reciver &&
    ammount > 0 &&
    currentacount.balance >= ammount &&
    currentacount.username !== reciver.username
  ) {
    reciver.movementDate.push(new Date());
    reciver.movements.push(ammount);
    currentacount.movementDate.push(new Date());
    currentacount.movements.push(-ammount);
    currentacount.recipent.push(transfername.value);
    reciver.recipent.push(currentacount.username);
    calculatebalance(currentacount);
    displaytransactions(currentacount);
    transfername.value = "";
    transferno.value = "";
  }
});

switchacc.addEventListener("click", function (e) {
  apppage.classList.add("val");
  loginpage.classList.remove("val");
});
