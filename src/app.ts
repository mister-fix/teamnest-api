import config from 'config';
import express, { Application, Request, Response } from 'express';

const app: Application = express();

app.set('env', config.get('env'));

app.get('/', (_req: Request, res: Response) => {
	res.send('Hello World');
});

export default app;
