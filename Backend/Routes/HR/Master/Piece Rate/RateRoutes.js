import express from 'express';
import db from '../../../db.js';
const router = express.Router();

//view all ppiecerae
router.get("/piecerateview", (req, res) => {
  const sql = " select  b.product_name, a.wef_date, a.product_rate, a.qa_rate " +
    " from mst_piecerate as a, products as b " +
    " where a.product_code = b.product_id";

  db.query(sql, (err, results) => {
    if (err) {
      console.log("Error to retriving data from database", err);
      res.status(500).json("Error to retriving data from database", err);
      return
    }
    res.status(200).json(results);
  });
});

export default router;