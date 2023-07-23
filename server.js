// DEPENDENCIES
const app = require("./app");

// CONFIGs
require("dotenv").config();
const PORT = process.env.PORT;

// LISTEN
app.listen(PORT, () => {
  console.log(`Listening On Port: ${PORT}`);
});
