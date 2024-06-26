import express from 'express'
import db from '../../../db.js'
const router = express.Router();

//Api to view attendece 
router.get('/attendeview', (req, res) => {

  const sql = `SELECT 
      DATE_FORMAT(a.attend_date, '%d/%m/%Y') AS attend_date,
      CONCAT(b.first_name, ' ', b.middle_name, ' ', b.last_name) AS Full_name,
      a.flag
  FROM 
     attend_driver AS a
  JOIN 
     employees AS b ON a.emp_id = b.emp_id`;
  //Where 
  //attend_date=?

  db.query(sql, (err, results) => {
    if (err) {
      console.log("Error to retriving data from database", err);
      return res.status(500).json("Error to retriving data from database", err)
    }
    res.status(200).json(results);
  });

});

//Api for creating attendence

export default router;