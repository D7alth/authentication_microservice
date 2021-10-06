"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const connectionString = 'postgres://xxxxxxxxxxxxxxxxxB@motty.db.elephantsql.com/ireyhsvp';
const db = new pg_1.Pool({ connectionString });
exports.default = db;
