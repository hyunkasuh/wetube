import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";
import routes from "./routes";
import { localsMiddleware } from "./localsMiddleware";

// Server --------------------------------------------------
const app = express();

// Midlewares ----------------------------------------------
app.use(helmet());
app.set("view engine", "pug");
app.use("/uploads", express.static("uploads/"));
// When somebody goes to a "/uploads", 
//give him using express static, which is a built-in middleware to give files from a directory "uploads".
// it doesn't look for controllers or views. it will just look for a file. 
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(localsMiddleware);

// Routers (3)----------------------------------------------
app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);

// ---------------------------------------------------------
export default app;
// ^ when somebody else import my file, I will give him the 'app' object.