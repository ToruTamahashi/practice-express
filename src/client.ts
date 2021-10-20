// jsからhttpリクエストする一番基本的な方法
const http = require('http');

http.get(
  {
    port: 3000,
    hostname: 'localhost',
    path: '/users',
    headers: {},
  },
  (res:any) => {
    console.log('connected');
    res.on('data', (chunk:any) => {
      console.log('chunk', '' + chunk);
    });
    res.on('end', () => {
      console.log('No more data');
    });
    res.on('close', () => {
      console.log('Closing connection');
    });
  },
);
