import express from 'express';
import db from '../../../db.js';
const router = express.Router();

//view All Vehicles
router.get("/vehview", (req, res) => {

  const sql = `SELECT
              a.veh_id,
              a.veh_no,
              a.veh_name,
              a.veh_type,
              a.veh_capacity,
              b.catg_name 
     FROM   
              mst_vehicle AS a  
     LEFT JOIN   
              mst_catg AS b ON a.veh_catg = b.catg_id and a.status ='A' `;

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
