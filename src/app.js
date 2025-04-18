// src/app.js

import express from "express"
import morgan from "morgan";
import cors from "cors"
import helmet from "helmet";
import cookieParser from "cookie-parser";

import userRoutes from './modules/user/models/routes/user.router.js'

// const regionRoutes = require('./modules/region/routes/region.routes');
// const serviceRoutes = require('./modules/service/routes/service.routes');
// const orderRoutes = require('./modules/order/routes/order.routes');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));

app.use('/api/users', userRoutes);
// app.use('/api/regions', regionRoutes);
// app.use('/api/services', serviceRoutes);
// app.use('/api/orders', orderRoutes);

app.all('/*splat', (req, res) => {
  res.status(404).json({ message: 'Sahifa topilmadi' });
});

export default app  
