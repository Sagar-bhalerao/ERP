import express, { response } from 'express';
import db from '../../../db.js';
const router = express.Router();


//All Designation view
router.get("/desgview", (req, res) => {
  const sql = 'select * from mst_desg';

  db.query(sql, (err, results) => {
    if (err) {
      console.log("Error to retriving data from database", err);
      res.status(500).json("Error to retrivin data from database", err);
      return;
    }
    return res.status(200).json(results);
  })
})

export default router;