import express from 'express';
import db from '../../../db.js';
const router = express.Router();

// Middleware to parse JSON bodies
router.use(express.json());

// View All Piece Workers
router.post('/pieceworkers', (req, res) => {
  const { prod_date, product_code } = req.body;


  const sql = `SELECT 
        e.emp_id,
        CONCAT(e.first_name, ' ', e.middle_name, ' ', e.last_name) AS full_name,
        COALESCE(pw.product_qty, 0) AS product_qty
    FROM 
        employees e
    JOIN 
        mst_catg c ON e.catg_id = c.catg_id
    LEFT JOIN 
        piece_work pw ON pw.emp_id = e.emp_id AND pw.prod_date = ? AND pw.product_code = ?
    WHERE 
        c.catg_name = 'PIECE WORKER'`;

  db.query(sql, [prod_date, product_code], (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      return res.status(500).send('An error occurred while executing the query.', err);
    }
    res.status(200).json(results);
  });
});

//view  product under piece worker
router.get("/productionview", async (req, res) => {

  const sql = ` Select  product_name, product_id as product_code from products where product_id in
                 ( select distinct  product_code from mst_piecerate )`;

  db.query(sql, (err, results) => {
    if (err) {
      console.log("Error to retriving data from database", err);
      res.status(500).json("Error to retriving data from database", err);
      return
    }
    res.status(200).json(results);
  });
});

//Insert new Produvtion Entry
router.post("/production-entry", (req, res) => {
  const { details, prod_date, product_code } = req.body;
  
  // Validate input data
  if (!Array.isArray(details) || !prod_date || !product_code) {
    return res.status(400).json({ error: "Invalid input data" });
  }

  const sql = 'INSERT INTO piece_work (prod_date, product_code, emp_id, product_qty) VALUES ?  ON DUPLICATE KEY UPDATE product_qty = VALUES(product_qty)';

  const values = details.map((entry) => [
    prod_date,
    product_code,
    entry.emp_id,
    entry.product_qty
  ]);

  db.query(sql, [values], (err, result) => {
    if (err) {
      console.error("Error inserting data: ", err);
      res.status(500).json({
        error: "Something went wrong while inserting data into the database",
      });
      return;
    }
    console.log("Data inserted successfully");
    res.status(200).json({ message: "Data inserted successfully" });
  });
});

//view All product 
router.get("/all-productionview", async (req, res) => {

  const sql = `SELECT pw.prod_date AS Date, CONCAT(e.first_name, ' ', e.middle_name, ' ', e.last_name) AS full_name, p.product_name, pw.product_qty FROM piece_work pw JOIN employees e ON pw.emp_id = e.emp_id JOIN products p ON pw.product_code = p.product_id`;

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