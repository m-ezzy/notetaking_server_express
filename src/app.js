import dotenv from 'dotenv';
dotenv.config();

import { createServer } from 'http';
import express from 'express';
import cors from 'cors';

import { connectDatabase } from './database.js';
import { clearDatabase, populateDatabase } from './seeder.js';
import routes from './routes.js';

await connectDatabase();
// await clearDatabase();
// await populateDatabase();

const port = process.env.PORT || 8000;
const app = express();
const server = createServer(app);

app.use(cors(
  {
    origin: ['http://localhost:5173', 'http://localhost:3000'],
    methods: "*",
    allowedHeaders: ["Access-Control-Allow-Origin", "Content-Type", "X-CSRFToken"],
    credentials: true,
  }
));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', routes);

app.listen(port, () => {
  console.log(`----- app running on port ${port} -----`);
});

export default app;
