// const express = require('express');
import express from "express"; // find from the 'node-modules' foler
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
const app = express();
const PORT = "4000";

// function handleListening() {
//     console.log(`Listening on: http://localhost:${PORT}`);
// }
// function handleHome(req, res) {
//     // console.log(req);
//     res.send("Hello from home!");
// }
// function handleProfile(req, res) {
//     res.send("Your are on my profile page. I guess.");
// }

const handleListening = () =>
    console.log(`Listening on: http://localhost:${PORT}`);

const handleHome = (req, res) => res.send("Hello from my Home!");

const handleProfile = (req, res) => res.send("Your are on my profile page. I guess.");

// const betweenHome = (req, res, next) => {
//     console.log("I'm between...");
//     next();
// };
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
app.use(morgan("dev"));

// app.use(betweenHome); //use this middleware globaly

app.get("/", handleHome);

app.get("/profile", handleProfile);

app.listen(PORT, handleListening);