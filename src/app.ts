import express from 'express';
import indexRoute from './router/index';
import { createProduct, getProducts } from './db';
const app: express.Express = express();
const port = 3000;

app.use(
  express.urlencoded({
    extended: true,
  }),
);
app.use(express.json());

// useが記述されいた場合それ以降のコードはuseの内容がtrueでないと実行できなくなる(認証とかに使う)
//CROS対応（というか完全無防備：本番環境ではだめ絶対）
app.use((req: express.Request, res: express.Response, next: express.NextFunction) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', '*');
  res.header('Access-Control-Allow-Headers', '*');
  next();
});

app.use('/api', indexRoute);

app.post('/products', (req: express.Request, res: express.Response) => {
  createProduct(req, res)
    .then(() => {
      console.log('成功');
    })
    .catch(() => {
      console.log('失敗');
    });
});

app.get('/products', (req: express.Request, res: express.Response) => {
  getProducts(req, res)
    .then(() => {
      console.log('成功');
    })
    .catch(() => {
      console.log('失敗');
    });
});

app.post("/records", (req: express.Request, res: express.Response) => {
  const data = res.body;
  const query = `SELECT * FROM health_records WHERE id = (${data.id})`;
  connection.query(query, (err, rows) => {
    if(err) throw err;
    res.json({data:rows});
  });

});
app.listen(port, () => console.log(`Example app listening on port ${port}!`));

export default app;
