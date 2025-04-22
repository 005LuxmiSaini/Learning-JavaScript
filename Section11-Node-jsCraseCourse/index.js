
const fs = require('fs');
const http = require('http');


const json = fs.readFileSync(`${__dirname}/data.json`, 'utf-8');
const laptopData = JSON.parse(json);

console.log(__dirname);

const server = http.createServer((req, res)=>{
    console.log('Someone did access the server');
});

server.listen(337, '127.0.0.1', () => {
    console.log('Listening for reqests now');
});
