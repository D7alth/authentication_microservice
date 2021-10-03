"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userRoutes = (0, express_1.Router)();
userRoutes.get('/user', (req, res, next) => {
    const users = [{ name: 'John', email: 'john@zipmail.com' }];
    res.json(users).status(200);
});
userRoutes.get('/user/:uuid', (req, res, next) => {
    const uuid = req.params.uuid;
    res.send({ uuid }).status(200);
});
userRoutes.post('/user', (req, res, next) => {
    const newUser = req.body;
    console.log(newUser);
    res.status(201).send(newUser);
});
userRoutes.put('/user', (req, res, next) => {
    const uuid = req.params.uuid;
    const modifyUser = req.body;
    modifyUser.uuid = uuid;
    res.send(modifyUser).status(200);
});
userRoutes.delete('/user', (req, res, next) => {
    res.sendStatus(200);
});
exports.default = userRoutes;
