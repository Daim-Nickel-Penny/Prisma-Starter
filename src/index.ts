import express from "express";
import { PrismaClient } from "@prisma/client";
const app = express();
const prisma = new PrismaClient();

app.use(express.json());

app.get("/", async (_req, res) => {
  const users = await prisma.user.findMany();
  res.json({ users });
});

app.post("/user", async (req, res) => {
  const { name, email } = req.body;
  try {
    const user = await prisma.user.create({
      data: {
        email,
        name,
      },
    });
    res.json({ user });
  } catch (err) {
    console.log(err);
    res.json({ error: err.message });
  }
});

app.post("/post", async (req, res) => {
  const { authorId, title, content } = req.body;

  const post = await prisma.post.create({
    data: {
      title,
      content,
      authorId: parseInt(authorId),
    },
  });
  res.json({ post });
});

const port = 5000;
app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
