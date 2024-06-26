import express from "express";
import cors from "cors";
import empRoutes from './Routes/HR/Master/Employee/empRoutes.js';
import catgRoutes from './Routes/HR/Master/Category/catgRoutes.js';
import deptRoutes from './Routes/HR/Master/Department/deptRoutes,.js';
import desgRoutes from './Routes/HR/Master/Designation/desgRoutes.js';
import locRoutes from './Routes/HR/Master/Location/locRoutes.js';
import prateRoutes from "./Routes/HR/Master/Piece Rate/RateRoutes.js";
import vehicleRoutes from "./Routes/HR/Master/Vehicle/vehicleRoutes.js"
import prodRoutes from "./Routes/HR/Master/Products/prodRoutes.js"
import productionRoutes from "./Routes/HR/Transaction/Production/productionRoutes.js"
import attendRoutes from "./Routes/HR/Transaction/Attendance/attendRoutes.js";
const app = express();
const port = 5002;
app.use(cors());

// Enable CORS middleware
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use(empRoutes);
app.use(catgRoutes);
app.use(deptRoutes);
app.use(desgRoutes);
app.use(locRoutes);
app.use(prateRoutes);
app.use(vehicleRoutes);
app.use(prodRoutes);
app.use(productionRoutes);
app.use(attendRoutes);



app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});