import mysql from "mysql";

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Password",
  //database: "personl_profile",
  database: "personl_profile",
});

export default connection;
