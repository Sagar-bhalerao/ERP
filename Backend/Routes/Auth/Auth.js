import express from "express";
import db from "../db";
import jwt from 'jsonwebtoken';

const router = express.Router();
const SECRET_KEY = 'My_Strong_secret_key';

// Create MySQL connection

function generateToken(payload) {
  return jwt.sign(payload, SECRET_KEY, { expiresIn: '1m' }); // Adjust expiresIn as needed
}

router.post('/sign-up', (req, res) => {
  const { phone, firstname, lastname, email, password } = req.body;

  // Check if email already exists
  db.query('SELECT * FROM users WHERE email = ?', [email], (err, rows) => {
    if (err) {
      console.error('Error checking email:', err);
      return res.status(500).json({ message: 'Internal server error' });
    }

    if (rows.length > 0) {
      console.log("Email already Exist");
      return res.status(400).json({ message: 'Email already exists' });
    }

    // If email does not exist, create the user
    db.query('INSERT INTO users ( phone, firstname,lastname, email, password) VALUES (?,?,?,?,?)', [phone, firstname, lastname, email, password], (err, result) => {
      if (err) {
        console.error('Error inserting user:', err);
        return res.status(500).json({ message: 'Internal server error' });
      }

      // Generate JWT token for the newly created user
      const userId = result.insertId;
      const isAdmin = false;

      const tokenPayload = { email, userId, isAdmin };
      const token = generateToken(tokenPayload);

      res.status(201).json({ message: 'User created successfully', token, userId, isAdmin });
    });
  });
});

// Login route
router.post('/log-in', (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);

  // Check if email exists
  db.query('SELECT * FROM users WHERE email = ?', [email], (err, rows) => {
    if (err) {
      console.error('Error checking email:', err);
      return res.status(500).json({ message: 'Internal server error' });
    }

    if (rows.length === 0) {
      console.log("Email not found");
      return res.status(404).json({ message: 'Email not found' });
    }

    const user = rows[0];
    if (user.password === password && user.email === email) {
      console.log("Login Success");
      
      // const PersonData = {
      //   firstname: user.firstname,
      //   lastname: user.lastname,
      //   userId:user.id,
      //   theme:user.theme
      // }
      const userId = user.id; // Assuming 'id' is the user's ID field in the database
      const theme = user.theme ;
      const firstname = user.firstname;
      const lastname = user.lastname;
      // By default, assign role as 'user'
      let role = 'user';

      // Check if the email belongs to an admin
      const adminEmails = ['test@123', '']; // Replace with your list of admin emails
      if (adminEmails.includes(email)) {
        role = 'admin';
      }

      // Generate JWT token for the authenticated user
      const tokenPayload = { email, userId, role };
      const token = generateToken(tokenPayload);

      return res.status(200).json({ message: 'Login successful', token, userId, role, theme,firstname,lastname });
    }

    console.log("Incorrect password");
    return res.status(401).json({ message: 'Invalid Credentials' });
  });
});

// theme route

router.put('/theme', (req, res) => {
  const { theme, userId } = req.body;
  
  // Perform an UPDATE operation to update the theme for the specific user
  db.query("UPDATE users SET theme = ? WHERE id = ?", [theme, userId], (err, result) => {
    if (err) {
      console.error('Error updating theme:', err);
      return res.status(500).json({ message: 'Internal server error' });
    }

    // Check if any rows were affected by the update
    if (result.changedRows === 0) {
      // If no rows were affected, it means the user with the provided ID doesn't exist or the theme was already set to the new value
      return res.status(404).json({ message: 'User not found or theme already set to the new value' });
    }

    // Theme updated successfully
    res.status(200).json({ message: 'Theme updated successfully', theme });
  });
});




export default router;





// router.post('/sign-up', (req, res) => {
//   const { email, password } = req.body;

//   // Check if email already exists
//   db.query('SELECT * FROM users WHERE email = ?', [email], (err, rows) => {
//     if (err) {
//       console.error('Error checking email:', err);
//       return res.status(500).json({ message: 'Internal server error' });
//     }

//     if (rows.length > 0) {
//       console.log("Email already Exist");
//       return res.status(400).json({ message: 'Email already exists' });
//     }

//     // Hash the password
//     bcrypt.hash(password, 10, (err, hash) => {
//       if (err) {
//         return res.status(500).json({ message: 'Internal server error' });
//       }
//       // Insert user into database
//       db.query('INSERT INTO users (email, password) VALUES (?, ?)', [email, hash], (err, result) => {
//         if (err) {
//           console.error('Error inserting user:', err);
//           return res.status(500).json({ message: 'Internal server error' });
//         }
//         res.status(201).json({ message: 'User created successfully' });
//       });
//     });
//   });
// });

// // Login route
// router.post('/login', (req, res) => {
//   const { email, password } = req.body;

//   // Check if email exists
//   db.query('SELECT * FROM users WHERE email = ?', [email], (err, rows) => {
//     if (err) {
//       console.error('Error checking email:', err);
//       return res.status(500).json({ message: 'Internal server error' });
//     }

//     // If user not found, return error
//     if (rows.length === 0) {
//       return res.status(404).json({ message: 'User not found' });
//     }

//     const user = rows[0];

//     // Compare provided password with hashed password in the database
//     bcrypt.compare(password, user.password, (err, result) => {
//       if (err) {
//         return res.status(500).json({ message: 'Internal server error' });
//       }

//       if (!result) {
//         return res.status(401).json({ message: 'Incorrect password' });
//       }

//       // Generate JWT token
//       const token = jwt.sign({ email: email }, SECRET_KEY);

//       // Send token to the client
//       res.json({ message: 'Login successful', token: token });
//     });
//   });
// });
