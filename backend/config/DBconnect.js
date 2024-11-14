const mongoose = require('mongoose');

const DBconnect = () => {
    mongoose.connect(process.env.DB_url)
        .then(() => {
            console.log('MongoDB connected successfully');
        })
        .catch((error) => {
            console.error('Error connecting to MongoDB:', error);
        });
};

module.exports = DBconnect;
