const escpos = require("escpos");
const { fsqrQr } = require("../../entity/fsqr-qr/app"); // entity
// #######################
const printFsqrQR = require("./qr");

// #######################
const printFsqrQRs = printFsqrQR({ escpos, fsqrQr });

// #######################
const services = Object.freeze({
  printFsqrQRs
});

module.exports = services;
module.exports = {
  printFsqrQRs
};
