const { fsqrQrPrints } = require("../../src/controller/fsqr-qr/app");

const modules = ({ router, makeExpressCallback }) => {
  // print qr route
  router.post("/print", makeExpressCallback(fsqrQrPrints));

  return router;
};

module.exports = modules;
