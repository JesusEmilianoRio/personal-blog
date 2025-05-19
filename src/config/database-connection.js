import mysql from 'mysql2/promise';


export const pool =  mysql.createPool({
    host: process.env.DB_HOST,
    port : process.env.DB_PORT,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    connectionLimit : 10,
});


//Validation from Database if it is connected.
export async function validateConnection(){
    let connection;
    try{
        connection = await pool.getConnection();
        await connection.query('SELECT 1');
        console.log("Database connection from pool is valid");
        return true;
    } catch(err) {
        console.log("Database connection from pool is not valid");
        return false
    } finally {
        if(connection) connection.release();
    }
};

