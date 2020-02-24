const printFsqrQR = ({ escpos, fsqrQr }) => {
  return async function posts(info) {
    const data = fsqrQr(info);

    const header = data.getHeader();
    const qr = data.getQr();

    // connect to installed printer thru USB
    // check other way to connect on npm page :)
    // const device = new escpos.USB("04b8", "0e11");
    const device = new escpos.USB(1208, 3601);
    // const device = new escpos.Serial("/dev/ttyAMA0");

    const options = { encoding: "GB18030" /* default */ };
    // encoding is optional
    const printer = new escpos.Printer(device, options);

    const stringJSON = JSON.stringify(qr);

    await device.open(function() {
      printer
        .font("b")
        .align("ct")
        .style("bu")
        .size(2, 2)
        .text(`${header.queue}`)
        .font("a")
        .align("ct")
        .style("bu")
        .size(1, 1)
        .text(`DR #: ${header.dr}`)
        .text(`Item: ${header.item}`)
        .text(`Transaction #: ${header.transaction}`)
        .text(`${header.date}`)
        .qrimage(stringJSON, { type: "png", mode: "dhdw", size: 3 }, function(
          err
        ) {
          this.cut();
          this.close();
        });
    });

    const msg = "Printed successfully.";
    return msg;
  };
};

module.exports = printFsqrQR;
