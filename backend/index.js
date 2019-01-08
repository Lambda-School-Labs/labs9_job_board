require('dotenv').config(); // load the .env file content

const server = require('./api/server.js');

const port = process.env.PORT || 7777;
server.listen(port, () => console.log(`\nServer listening on port ${port}\n`));