var users = [
  {
    user: 'user',
    pwd: 'user',
    roles: [
      {
        role: 'readWrite',
        db: 'test_db',
      },
    ],
  },
];

for (var i = 0, length = users.length; i < length; ++i) {
  db.createUser(users[i]);
}
