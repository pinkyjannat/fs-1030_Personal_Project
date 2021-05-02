import express from "express";
import db from "../../../server.js";
const providerRoute = express.Router();



//get all providers list
providerRoute.get("/", async (req, res) => {
  try {
    // await db.query(
    //   "SELECT careprovider_id, careprovider_firstname, careprovider_lastname, careprovider_username,careprovider_avatar, is_admin FROM care_provider",
    //   (err, data) => {
    //     if (err) {
    //       console.log(err);
    //       return res.status(400).json({ message: err });
    //     } else {
    //       console.log("get all providers data successfully.");
    //       res.status(200).json({
    //         data,
    //       });
    //     }
    //   }
    // );
    console.log('hello');
  } catch (err) {
    console.log(err);
    throw err;
  }
});



export default providerRoute;
