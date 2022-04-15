const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

app.get("/api/compliment", (req, res) => {
  const compliment = ["Your hair looks nice!",
					 "You've been working out, haven't you?",
					 "I bet you could take on a bear in a fight, no problem",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliment.length);
  let randomCompliment = compliment[randomIndex];

  res.status(200).send(randomCompliment);
  
});

app.get("/api/fortune", (req, res) => {
  const fortune = ["Your future holds an encounter with a black bear",
					 "Your future holds an encounter with a brown bear",
					 "Your future holds an encounter with a polar bear",
           "Your future holds an encounter with a sea bear"
  ];

  

  // choose random fortune
  let randomIndex = Math.floor(Math.random() * fortune.length);
  let randomFortune = fortune[randomIndex];

  res.status(200).send(randomFortune);
  
});

app.get("/api/bears", (req, res) => {

  
});

app.get("/api/blackfight", (req, res) => {
  const blackFight = `Maybe? Probably not, to be honest. You should try either way, as black bears can be deterred with force and it will eat you if you don't.`
  res.status(200).send(blackFight)
});

app.get("/api/brownfight", (req, res) => {
  const brownfight = `No chance. Go for it if you have a death wish, but your best bet is to lay down on your stomach and cover your head. Please don't run or climb, it's way faster than you at both of those things.`
  res.status(200).send(brownfight)
});

app.get("/api/whitefight", (req, res) => {
  const whitefight = `Absolutely not. If you see a polar bear, it has seen you for much longer and has already decided that you're going to be its next meal. Find shelter immediately or...well...`
  res.status(200).send(whitefight)
});

app.get("/api/seafight", (req, res) => {
  const seafight = `You're not winning this fight, either. The good news is that sea bears can be repelled by drawing a sea bear circle in the sand around you. MAKE SURE IT IS NOT AN OVAL.`
  res.status(200).send(seafight)
});
  


app.listen(4000, () => console.log("Server running on 4000"));
