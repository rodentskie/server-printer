const { printFsqrQRs } = require("../../use-case/fsqr-qr/app");

// #######################
const fsqrQrPrint = require("./qr");
// #######################
const fsqrQrPrints = fsqrQrPrint({ printFsqrQRs });
// #######################
const services = Object.freeze({
  fsqrQrPrints
});

module.exports = services;
module.exports = {
  fsqrQrPrints
};
