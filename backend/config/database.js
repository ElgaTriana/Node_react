// import { Sequelize } from "sequelize";
 
// const db = new Sequelize('mern_db', 'root', '', {
//     host: "localhost",
//     dialect: "mysql"
// });
 
// export default db;

import { Sequelize } from "sequelize";

const koneksi=new Sequelize('mern_db', 'root', '',{
    host: "localhost",
    dialect: "mysql"    
});

export default koneksi;