import express from 'express';
import db from '../../../db.js';
const router = express.Router();

//View All Category
router.get("/catgview", (req, res) => {
  const sql = 'SELECT * FROM mst_catg';

  db.query(sql, (err, results) => {
    if (err) {
      console.log("Error retrieving data from database:", err);
      return res.status(500).json({ error: "Failed to fetch data from database" });
    }
    res.status(200).json(results);
  });
});

export default router;
