import chalk from 'chalk';
import express, { Request, Response } from 'express';

const app = express();
const PORT = 8080;

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.get('/api', (req: Request, res: Response) => {
  res.json({ message: 'Welcome to Back End boilerplate!' });
});

app.listen(PORT, () => {
  console.log(chalk.bold.green(`Server run on http://localhost:${PORT}`));
});

console.log(process.argv[2])