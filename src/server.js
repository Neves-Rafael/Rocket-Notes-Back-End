const express = require("express");

const routes = require("./routes")



const app = express();
app.use(express.json());
app.use(routes)



//listen port
const PORT = 3333;
app.listen(PORT, () => console.log(`Server ir running on Port ${PORT}`));
