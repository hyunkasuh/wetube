// const express = require('express');
import express from "express";
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

app.get("/", handleHome);
app.get("/profile", handleProfile);

app.listen(PORT, handleListening);