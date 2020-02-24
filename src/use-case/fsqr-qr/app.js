const escpos = require("escpos");
const { fsqrQr } = require("../../entity/fsqr-qr/app"); // entity
// #######################
const printFsqrQR = require("./qr");
const findPrinter = require("./find-printer");
// #######################
const printFsqrQRs = printFsqrQR({ escpos, fsqrQr });
const findPrinters = findPrinter({ escpos });
// #######################
const services = Object.freeze({
  printFsqrQRs,
  findPrinters
});

module.exports = services;
module.exports = {
  printFsqrQRs,
  findPrinters
};
