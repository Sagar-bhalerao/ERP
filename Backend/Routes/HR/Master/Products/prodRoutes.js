
import express from 'express';
import db from '../../../db.js';
const router = express.Router();

//view All product
router.get("/prodview", async (req, res) => {

  const sql = `SELECT 
    a.product_id, 
    a.product_name, 
    b.unit_name, 
    c.category_name 
FROM 
    products AS a
JOIN 
    units AS b ON a.unit_id = b.unit_id
JOIN 
    categories AS c ON a.category_id = c.category_id;`;

  db.query(sql, (err, results) => {
    if (err) {
      console.log("Error to retriving data from database", err);
      res.status(500).json("Error to retriving data from database", err);
      return
    }
    res.status(200).json(results);
  });
});

//Creating new product
router.post("/newprod", async (req, res) => {
  const { product_name, unit_id, category_id, ext_code } = req.body;
  const sql = `INSERT INTO products (product_name, unit_id, category_id, ext_code) 
               VALUES (?, ?, ?, ?)`;

  db.query(sql, [product_name, unit_id, category_id, ext_code], (err, results) => {
    if (err) {
      console.error("Error to adding product:", err);
      return res
        .status(500)
        .json({ error: "Failed to creating new product" });
    }
    console.log("Product create Successfully..!", results);
    return res.status(200).json({ message: "product create successfully" });
  });
});

//View All Units
router.get("/units", async (req, res) => {

  const sql = `SELECT unit_id, unit_name FROM units ORDER BY unit_id`;

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