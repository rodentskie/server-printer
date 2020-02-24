const qr = ({}) => {
  return function make({ header, qrcode } = {}) {
    if (!header) {
      throw new Error("No header data.");
    }
    if (!qrcode) {
      throw new Error("No QR data.");
    }
    if (!header.queue) {
      throw new Error("No queue number for header.");
    }
    if (!header.transaction) {
      throw new Error("No transaction number for header.");
    }
    if (!header.date) {
      throw new Error("No transaction date for header.");
    }
    if (!qrcode.transaction) {
      throw new Error("No transaction number for QR.");
    }
    if (!qrcode.supplier_code) {
      throw new Error("No supplier code for QR.");
    }
    if (!qrcode.date) {
      throw new Error("No transaction date for QR.");
    }
    return Object.freeze({
      getHeader: () => header,
      getQr: () => qrcode
    });
  };
};

module.exports = qr;
