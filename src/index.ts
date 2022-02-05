import express from "express";

const app = express();

app.get("/", (_req, res) => {
  res.send("Hello");
});

const port = 5000;
app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
