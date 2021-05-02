import express from "express";
import * as jwtGenerator from 'jsonwebtoken'
//import providersRoute from "./providers";
import db from "../server";

let emrRouter = express.Router();


  

    
emrRouter.post("/entities", async (req, res) => {
    try {
      const email = req.body.entry_email;
      console.log(email);
      await db.query(
        `SELECT * FROM entries WHERE entry_email = '${email}'`,
        (err, data) => {
          if (err) {
            console.log(err);
            return res.status(400).json({ message: err });
          } else {
            console.log("get all providers data successfully.");
            res.status(200).json({
              data,
            });
          }
        }
      );
      
    } catch (err) {
      console.log(err);
      throw err;
    }
  });

  

//Create a new entity
emrRouter.post("/create", async (req, res) => {
    try {
      const entry_name = req.body.entry_name;
      const entry_email = req.body.entry_email;
      const entry_phone = req.body.entry_phone;
      const entry_message = req.body.entry_message;
        
        
      let newEntry = await db.query(
        "INSERT INTO entries(entry_name, entry_email, entry_phone, entry_message) VALUES (?,?,?,?)",
        [
          entry_name,
          entry_email,
          entry_phone,
          entry_message
        ]
      );
    
      res.status(200).json({ entry_email });
      console.log("Add a new entry successfully!");
    } catch (err) {
      console.error(err.message);
      res.status(500).send({ message: err });
    }
  });

  //Create a new User
emrRouter.post("/create/user", async (req, res) => {
    try {
      const user_name = req.body.user_name;
      const user_email = req.body.user_email;
      const user_phone = req.body.user_phone;
      const user_password = req.body.user_password;

      console.log(user_password);
        
        
      let newUser = await db.query(
        "INSERT INTO users(user_name, user_email, user_phone, user_password) VALUES (?,?,?,?)",
        [
          user_name,
          user_email,
          user_phone,
          user_password
        ]
      );
    
      res.status(200).json({ user_email });
      console.log("Add a new user successfully!");
    } catch (err) {
      console.error(err.message);
      res.status(500).send({ message: err });
    }
  });

  emrRouter.get("/users", async (req, res) => {
    try {
      await db.query(
        "SELECT * FROM users",
        (err, data) => {
          if (err) {
            console.log(err);
            return res.status(400).json({ message: err });
          } else {
            console.log("get all users data successfully.");
            res.status(200).json({
              data,
            });
          }
        }
      );
      
    } catch (err) {
      console.log(err);
      throw err;
    }
  });

  
  

  
  emrRouter.post('/auth', (req, res) => {
    const username = req.body.username
    const password = req.body.password
    const secret = '232323232';

   if ( password == "password") {
        const token = jwtGenerator.sign({username}, secret, {expiresIn: '1h'})
        const userInfo = {
          email: username,
          token: token,
        };
        return res.send({userInfo})
   }
    return res.status(401).send({error: "incorrect username\password"})
})



export default emrRouter;
