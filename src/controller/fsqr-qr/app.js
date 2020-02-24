const { printFsqrQRs, findPrinters } = require("../../use-case/fsqr-qr/app");

// #######################
const fsqrQrPrint = require("./qr");
const printerFind = require("./find-printer");
// #######################
const fsqrQrPrints = fsqrQrPrint({ printFsqrQRs });
const printerFinds = printerFind({ findPrinters });
// #######################
const services = Object.freeze({
  fsqrQrPrints,
  printerFinds
});

module.exports = services;
module.exports = {
  fsqrQrPrints,
  printerFinds
};
