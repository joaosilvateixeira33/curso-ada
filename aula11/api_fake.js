const dotenv = require('dotenv')
dotenv.config()

console.log(`Usuario em bd: ${process.env.DATABASE_USER}`);
