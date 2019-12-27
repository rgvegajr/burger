# burger

To use on aws:
1. open terminal
2. start mysql:  sudo service mysqld start && sudo service mysqld status
3. start mysql cli: sudo mysql -uroot -p
4. IF db not already created: run mysql commands:  source schema.sql and seeds.sql
5. ELSE run: USE burgers_db;
6. exit mysql cli, run: exit;
7. change password for connection.js if required
8. verify by running; node server.js

if done correctly:

vocstartsoft:~/environment/burger (master) $ node server.js
connected as id 3
[ RowDataPacket { id: 1, burger_name: 'mysql burger', devoured: 0, image: null },
  RowDataPacket {
    id: 2,
    burger_name: 'double cheeseburger',
    devoured: 0,
    image: null },
  RowDataPacket {
    id: 3,
    burger_name: 'mushroom burger',
    devoured: 0,
    image: null },
  RowDataPacket {
    id: 4,
    burger_name: 'bbq bacon burger',
    devoured: 0,
    image: null },
  RowDataPacket {
    id: 5,
    burger_name: 'impossible burger',
    devoured: 0,
    image: null },
  RowDataPacket { id: 6, burger_name: 'fish burger', devoured: 0, image: null } ]

  references:
  catsappsolved
  ormexample