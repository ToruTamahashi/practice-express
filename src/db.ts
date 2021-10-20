import express from 'express';
import mongoose from 'mongoose';
import Product from './models/product';

const USERNAME = 'root';
const PASSWORD = 'root';
const HOSTNAME = 'localhost';
const PROT = '27018';
const DB = 'test';

mongoose
  .connect(
    `mongodb://${USERNAME}:${PASSWORD}@${HOSTNAME}:${PROT}/${DB}?authSource=admin&readPreference=primary&ssl=false`,
  )
  .then(() => {
    console.log('Connected');
  })
  .catch(() => {
    console.log('Connected failed');
  });

const createProduct = async (req: express.Request, res: express.Response) => {
  const createdProduct = new Product({
    name: req.body.name,
    price: req.body.price,
  });
  const result = await createdProduct.save();

  res.json(result);
};

const getProducts = async (req: express.Request, res: express.Response) => {
  const products = await Product.find().exec();

  res.json(products);
};

export { createProduct, getProducts };

// const url = 'mongodb://root:root@localhost:27018/?authSource=admin&readPreference=primary&ssl=false';

// MongoClient.connect(url, (error: any, client: any) => {
//   const db = client.db('test');
//   //   db.createCollection("tmp2",(error :any,collection:any) => {
//   //       client.close()
//   //   })
//   db.listCollections().toArray((error: any, items: any) => {
//     for (let item of items) {
//       console.log(item);
//     }
//     client.close();
//   });
//   client.close();
// });
