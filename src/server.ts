import express from 'express';
import { connect } from 'mongoose';
import routes from './routes';
import { MONGO_URI } from './config/env';
import cors from 'cors';

connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('> Connect to DB with Success');
  });

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3000, () => {
  console.log('Server Running');
})