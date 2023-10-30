const express = require('express');
const server = express();
 
server.all('/', (req, res) => {
  res.send(`Server Successfully Connected to Uptimerobot!`)
})
 
function keepAlive() {
  server.listen(3000, () => { console.log("Server Successfully Connected to Uptimerobot at " + Date.now()) });
}
 
module.exports = keepAlive;
