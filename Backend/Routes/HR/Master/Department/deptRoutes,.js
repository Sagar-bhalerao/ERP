import express from 'express';
import mysql from 'mysql';
import db from '../../../db.js';
const router = express.Router();

//View All Category
router.get("/deptview", (req, res) => {
  const sql = 'SELECT * FROM mst_dept';

  db.query(sql, (err, results) => {
    if (err) {
      console.log("Error retrieving data from database:", err);
      return res.status(500).json({ error: "Failed to fetch data from database" });
    }
    res.status(200).json(results);
  });
});

export default router;
