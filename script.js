"use strict";

// Data
const accounts = [
  {
    owner: "Shohanur Rahman",
    movements: [250, 400, -500, 3000, -700, -150, 50, 1500],
    interestRate: 1.5, // %
    password: 1111,
  },
  {
    owner: "Sunerah Binte Ayesha",
    movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
    interestRate: 1.3,
    password: 2222,
  },
  {
    owner: "Afrin Tumpa",
    movements: [430, 1000, 700, 50, 90],
    interestRate: 1.2,
    password: 3333,
  },
  {
    owner: "Nibir Ahmed",
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 0.8,
    password: 4444,
  },
  {
    owner: "Sumaiya Shanta",
    movements: [2000, 400, -100, -890, -2250, -1000, 2500, -300],
    interestRate: 1.4,
    password: 5555,
  },
];

// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance-value");
const labelSumIn = document.querySelector(".summary-value-in");
const labelSumOut = document.querySelector(".summary-value-out");
const labelSumInterest = document.querySelector(".summary-value-interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login-btn");
const btnTransfer = document.querySelector(".form-btn-transfer");
const btnLoan = document.querySelector(".form-btn-loan");
const btnClose = document.querySelector(".form-btn-close");
const btnSort = document.querySelector(".btn-sort");

const inputLoginUsername = document.querySelector(".login-input-username");
const inputLoginPassword = document.querySelector(".login-input-password");
const inputTransferTo = document.querySelector(".form-input-to");
const inputTransferAmount = document.querySelector(".form-input-amount");
const inputLoanAmount = document.querySelector(".form-input-loan-amount");
const inputCloseUsername = document.querySelector(".form-input-username");
const inputClosePassword = document.querySelector(".form-input-password");

/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
// Lectures
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
const currencies = new Map([
  ["USD", "United States dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound sterling"],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
