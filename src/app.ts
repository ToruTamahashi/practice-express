import express from 'express';
const app: express.Express = express();
const port = 3000;

// useが記述されいた場合それ以降のコードはuseの内容がtrueでないと実行できなくなる(認証とかに使う)
//CROS対応（というか完全無防備：本番環境ではだめ絶対）
app.use((req: express.Request, res: express.Response, next: express.NextFunction) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', '*');
  res.header('Access-Control-Allow-Headers', '*');
  next();
});

app.get('/', (req: express.Request, res: express.Response) => res.send('Hello World!!'));

app.get('/users', (req: express.Request, res: express.Response) => {
  res.json([
    {
      id: 1,
      name: 'User Userson',
    },
  ]);
});

app.get('/products', (req: any, res: any) => {
  res.json([
    {
      id: 1,
      name: 'The Bluest Eye',
    },
  ]);
});

type User = {
  id: number;
  name: string;
  email: string;
};

const users: User[] = [
  { id: 1, name: 'User1', email: 'user1@test.local' },
  { id: 2, name: 'User2', email: 'user2@test.local' },
  { id: 3, name: 'User3', email: 'user3@test.local' },
];

//一覧取得
app.get('/users2', (req: express.Request, res: express.Response) => {
  res.send(JSON.stringify(users));
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
