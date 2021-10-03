"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const indexRouter = (0, express_1.Router)();
indexRouter.get('/', (req, res, next) => {
    res.send({ message: 'OK' }).status(200);
});
exports.default = indexRouter;
