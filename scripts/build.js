#!/usr/bin/env node
const process = require("process");
process.env.NODE_ENV = "production";

const webpack = require("webpack");

const config = require("../config/webpack.config");

console.log("Building Project");
let wp = config("production");
const compiler = webpack(wp);


