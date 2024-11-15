const express = require('express');
const DBconnect = require('./config/DBconnect');
const loginRoutes = require('./routes/loginRoutes');
const produteRoutes=require('./routes/productRoutes')
const cors=require('cors')
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 7000;
app.use(express.json());
app.use(cors(
    {
        origin: "http://localhost:3000"
    }
))
// Connect to the database
DBconnect();

// Middleware to parse JSON data


// Routes
app.use("/api/auth", loginRoutes);
app.use("/api/admin", produteRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
