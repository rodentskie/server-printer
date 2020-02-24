const express = require("express");
const router = express.Router();
const makeExpressCallback = require("../../src/express-callback/app");

const fsqr = require("./routes");

//#########
const fsqrs = fsqr({ router, makeExpressCallback });

const services = Object.freeze({
  fsqrs
});

module.exports = services;

module.exports = {
  fsqrs
};

module.exports = fsqrs;
