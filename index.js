import express from "express";

const API_KEY = "c66117e9bec1d2379879ca5c238dd6c8";

const app = express();

app.set("view engine", "pug");
// view engine (템플릿 엔진) 을 pug로 사용하기 위한 설정

app.get("/", (req, res) => {
  res.render("index", { apiKey: API_KEY });
});

/*
app.get("/", (req, res) => {
  res.sendFile(`${__dirname}/mapKakao.html`);
});
*/

app.listen(5000, () => {
  console.log("Starting....");
});
