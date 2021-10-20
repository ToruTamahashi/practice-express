import express from 'express';
const router = express.Router();

//set default API response
router.get('/', (req, res, next) => {
  res.json({
    status: 'API Works',
    message: 'Welcome to FirstRest API',
  });
});

router.get('/users', (req: express.Request, res: express.Response) => {
  res.json([
    {
      id: 1,
      name: 'User Userson',
    },
  ]);
});

router.get('/products', (req: any, res: any) => {
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
router.get('/users2', (req: express.Request, res: express.Response) => {
  res.send(JSON.stringify(users));
});

//Export API routes
// module.exports = router;
export default router;
