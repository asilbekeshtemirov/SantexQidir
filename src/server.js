// src/server.js

import app from './app.js';  // ES6 import
import { APP_PORT } from './config/app.config.js';
import connectDB from './config/mongo.config.js';

// MongoDB ulanishini ishga tushurish
connectDB();

// Xatoliklarni ushlovchi process listenerlar
process.on("unhandledRejection", (reason, promise) => {
  console.error("Unhandled Rejection:", reason);
  
  if (server) {
    server.closeAllConnections?.(); // Agar mavjud bo‘lsa, barcha aloqalarni yopish
    server.close(() => {
      process.exit(1);
    });
  }
});

process.on("uncaughtException", (err) => {
  console.error("Uncaught Exception:", err);
  process.exit(1);
});

// Serverni ishga tushurish
const server = app.listen(APP_PORT, () => {
  console.log(`🚀 Server is running on port ${APP_PORT}`);
});
