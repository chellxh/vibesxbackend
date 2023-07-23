// DEPENDENCIES
const pgp = require("pg-promise")();

// CONFIGs
require("dotenv").config();

const cn = {
  host: process.env.PG_HOST,
  port: process.env.PG_PORT,
  database: process.env.PG_DATABASE,
  user: process.env.PG_USER,
};

const db = pgp(cn);

db.connect()
  .then((obj) => {
    console.log("Postgres Connection Established"); // shows connection to postgre in terminal
    obj.done(); // success, release connection
  })
  .catch((e) => {
    console.log("Error:", e.message || e);
  });

// EXPORT
module.exports = db;
