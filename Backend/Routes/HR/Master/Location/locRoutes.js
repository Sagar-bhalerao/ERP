import express from 'express';
import db from '../../../db.js';
const router = express.Router();

//View All Locations
router.get("/locview", (req, res) => {

  const sql = 'select * from mst_loc';

  db.query(sql, (err, results) => {
    if (err) {
      console.log("Error to retriving data from database", err);
      res.status(500).json("Error to retriving data from database", err);
      return;
    }
    res.status(200).json(results);
  });

});

export default router;
