const findPrinter = ({ escpos }) => {
  return async function selects(info) {
    return escpos.USB.findPrinter();
  };
};

module.exports = findPrinter;
