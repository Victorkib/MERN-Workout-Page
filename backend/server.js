const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const cors = require('cors');
require('dotenv').config();
const port = process.env.PORT || 3500;
const workoutRoute = require('./routes/workoutRoutes');
const userRoute = require('./routes/userRoutes');
const mongoose = require('mongoose');

//middleware
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: ['http://localhost:3000'],
    methods: ['GET', 'POST', 'PATCH', 'PUT', 'DELETE'],
    credentials: true,
  })
);

//db connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Success Db connection');
    app.listen(port, () => {
      console.log(`Server listening to port ${port}`);
    });
  })
  .catch((err) => {
    console.log('Error Connecting to DB ' + err);
  });

//routes
app.use('/api/workouts', workoutRoute);
app.use('/api/users', userRoute);
