# Tic Tac Toe Code Challenge

This app is a code challenge of the classic Tic Tac Toe game. It is built with a client that uses React and one API using Nodejs and MongoDB mainly. Both environments were written using TypeScript.

<br />

## Requirements
1. Create a tic-tac-toe game with a UI using react and the logic using rest endpoints.
2. Every game result is stored in the database with the snapshot of the board and the winner.

<br />

## Installation

- `git clone https://github.com/francijpg/tic-tac-toe-challenge.git`

## To start the application, you just need to use docker-compose, with the following commands

```
 cd tic-tac-toe-challenge
 docker-compose build --no-cache
 docker-compose up
```
By default the client is running on port 3000 and the API is running on port 4000.
- Client = http://localhost:3000
- API = http://localhost:4000/api/v1
  - HTTP/GET Example: http://localhost:4000/api/v1/games/

<br />

## Helpers

Here are some bash commands so you can check the mongodb container data (results) inside docker

### mongo-bash-commands => {

```
mongo -u admin -p admin
show dbs
use tictactoedb
show collections
db.games.find().pretty()
```

}

## DEMO (CLIENT)
![DEMO](https://github.com/francijpg/tic-tac-toe-challenge/blob/main/assets/images/demo-1.png)
![DEMO](https://github.com/francijpg/tic-tac-toe-challenge/blob/main/assets/images/demo-2.png)
![DEMO](https://github.com/francijpg/tic-tac-toe-challenge/blob/main/assets/images/demo-3.png)
![DEMO](https://github.com/francijpg/tic-tac-toe-challenge/blob/main/assets/images/demo-4.png)
![DEMO](https://github.com/francijpg/tic-tac-toe-challenge/blob/main/assets/images/demo-5.png)

## DEMO (API)
![DEMO](https://github.com/francijpg/tic-tac-toe-challenge/blob/main/assets/images/mongo-winners-data.png)