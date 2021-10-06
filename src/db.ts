import { Pool } from "pg";

const connectionString = 'postgres://xxxxxxxxxxxxxxxxxxxxxx@motty.db.elephantsql.com/ireyhsvp';
const db = new Pool({ connectionString });

export default db;