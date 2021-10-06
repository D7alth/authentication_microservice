"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const repo_user_1 = __importDefault(require("../repo/repo-user"));
const userRoutes = (0, express_1.Router)();
userRoutes.get('/user', async (req, res, next) => {
    const users = await repo_user_1.default.findAllUsers();
    res.json(users).status(200);
});
userRoutes.get('/user/:uuid', async (req, res, next) => {
    const uuid = req.params.uuid;
    const user = await repo_user_1.default.findById(uuid);
    res.send(user).status(200);
});
userRoutes.post('/user', async (req, res, next) => {
    const newUser = await repo_user_1.default.create(req.body);
    res.status(201).send(newUser);
});
userRoutes.put('/user/:uuid', async (req, res, next) => {
    const uuid = req.params.uuid;
    const modifyUser = req.body;
    modifyUser.uuid = uuid;
    await repo_user_1.default.update(modifyUser);
    res.send({ message: 'OK' }).status(200);
});
userRoutes.delete('/user/:uuid', async (req, res, next) => {
    const uuid = req.params.uuid;
    await repo_user_1.default.remove(uuid);
    res.send({ message: 'OK' }).sendStatus(200);
});
exports.default = userRoutes;
