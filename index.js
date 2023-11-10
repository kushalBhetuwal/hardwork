import OpenAI from "openai";
import * as dotenv from 'dotenv';

const openai = new OpenAI({
  apiKey:process.env.MY_API_KEY,
});

const setupTextarea = document.getElementById('setup-textarea') 
const movieBossText = document.querySelector('.movie-boss-text')

document.getElementById('send-btn').addEventListener("click", async()=>{
    
    movieBossText.innerHTML = "okay just wait a second!!1"
    const data = await main();
    console.log(data);
})


async function main() {
    const completion = await openai.completions.create({
      model: "gpt-3.5-turbo-instruct",
      prompt: "who is elon musk?",
      max_tokens: 3000,
      temperature: 0,
    });
  
    return completion.choices[0].text
  }
console.log(main())