### app.js起動
| node app.js

### 変更のたびに再起動させたい場合
| npx nodemon app.js

### tsファイルを起動
| npx ts-node app.ts  


### tsファイルをホットリロード(基本はこれでよし)
nodemon.jsonに準拠(どのディレクトリを監視して、どんなコードを実行するか指定している)
| nodemon