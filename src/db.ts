import { Pool } from "pg";

const connectionString = 'postgres://ireyhsvp:OkuZhGk4BAip11cDv8YaWshep4WSxD8B@motty.db.elephantsql.com/ireyhsvp';
const db = new Pool({ connectionString });

export default db;