#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const chalk = require('chalk');
const pkg = require("../package.json");
const pkgConfig = pkg.config;
const dirs = pkg.directories;
const paths = {
    src: path.resolve(process.cwd(), dirs.src),
    public:  path.resolve(process.cwd(), dirs.web),
    buildWeb: path.resolve(process.cwd(), dirs.build, "web")
}