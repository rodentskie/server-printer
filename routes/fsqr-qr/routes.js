const {
  fsqrQrPrints,
  printerFinds
} = require("../../src/controller/fsqr-qr/app");

const modules = ({ router, makeExpressCallback }) => {
  // print qr route
  router.post("/print", makeExpressCallback(fsqrQrPrints));

  // find all printers
  router.get("/get", makeExpressCallback(printerFinds));

  return router;
};

module.exports = modules;
