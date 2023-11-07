const OpenAI = require("openai");
const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
require("dotenv").config({ path: ".env.local" });

app.listen(port, () => {
  console.log(`Le serveur est en cours d'exécution sur le port ${port}`);
});

const openai = new OpenAI({
  apiKey: process.env.YOUR_API_KEY,
  baseURL: "https://api.lemonfox.ai/v1",
});

openai.chat.completions
  .create({
    messages: [
      { role: "system", content: "You are a helpful assistant" },
      { role: "user", content: "How many days are in a year?" },
    ],
    model: "zephyr-chat",
  })
  .then((completion) => {
    console.log(completion.choices[0].message.content);
    console.log(completion);
  })
  .catch((error) => {
    console.error(error);
  });
