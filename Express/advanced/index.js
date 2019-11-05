const express = require("express");
const user = require("./routes/user");
const article = require("./routes/article");

const app = express();

app.use(express.json());
app.use("/api/user", user);
app.use("/api/article", article);

app.listen(3000, () => { console.log("서버 작동중...") });

app.use(express)