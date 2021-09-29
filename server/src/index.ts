import express, { Express, Request, Response } from "express";

const app: Express = express();
const PORT = 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.get("/", (req: Request, res: Response) =>
  res.send("Express + TypeScript Server")
);

app.listen(PORT, () => {
  console.log("Server running at localhost:", PORT);
});

// "server": "\"tsc -w\" \"nodemon dist/index.js\""
