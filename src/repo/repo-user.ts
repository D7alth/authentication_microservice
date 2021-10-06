import User from '../models/model-user';
import db from '../db'

class UserRepo {
    async findAllUsers():Promise<User[]>{
        const query = 'SELECT uuid, username FROM application_user';
        const { rows } = await db.query<User>(query);
        return rows || [];
    }
    async findById(uuid:string):Promise<User>{
        const query = `SELECT uuid, username FROM application_user WHERE uuid = $1`;
        const values = [uuid]
        const { rows } = await db.query<User>(query, values);
        const [ user ] = rows;
        return user;

    }

}

export default new UserRepo();