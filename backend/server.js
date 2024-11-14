const express = require('express');
const DBconnect = require('./config/DBconnect');
const loginRoutes=require('./routes/loginRoutes')
require('dotenv').config(); 
const app = express();
const PORT = process.env.PORT || 7000;
DBconnect()

app.use("/api/auth", loginRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
