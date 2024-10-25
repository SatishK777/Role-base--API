const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('./config/db');
const authRoutes = require('./Routes/authRoutes');
const userRoutes = require('./Routes/userRoutes');


app.use(express.json());

// Routes
app.use('/auth',authRoutes);
app.use('/user',userRoutes);

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})