#!/usr/bin/env node

const jsonServer = require('json-server');
const db = require('./data.json');
const server = jsonServer.create();
server.use(jsonServer.defaults());

const router = jsonServer.router(db);
server.use(router);

server.listen(8080);

console.log(`Running on http://localhost:8080/todos`);
