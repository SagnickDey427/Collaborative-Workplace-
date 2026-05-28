import express from "express" ;
import connectDb from "./config/connectDb.js";
import userRouter from "./routes/userRoutes.js";
import documentRouter from "./routes/documentRoutes.js";
import dotenv from 'dotenv';
import cors from 'cors';
const app = express();
const port = 5000;

//middlewares
dotenv.config();
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json());

app.use("/api/auth", userRouter);
app.use("/api/docs", documentRouter);

connectDb().then(() => {
  app.listen(port, () => {
    console.log(`Server is running on port : ${port}`);
  });
});
