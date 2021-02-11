import express from 'express';
import routes from './routes';
import { PORT } from './config/env';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(PORT, () => {
  console.log(`> Server running at port ${PORT}`);
});