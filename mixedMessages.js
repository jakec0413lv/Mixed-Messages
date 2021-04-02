const jokes = 
["Why did the gym close down? It just didn’t work out!",
"A plateau is the highest form of flattery.",
"Have you ever tried eating a clock? It’s really time-consuming, especially if you go for seconds.",
"Why did the M&M go to school? He wanted to be a Smartie.",
"What do you call a singing laptop? A Dell!",
"I never make mistakes. …I thought I did once; but I was wrong."];

const funFacts = 
["The strawberry is the only fruit that bears seeds on the outside.",
"Cherries are a member of the rose family (Rosaceae) as are quince, pears, plums, apples, peaches and raspberries!",
"Frida Kahlo created 143 paintings. Of these, 55 were self-portraits.",
"There’s only one letter that doesn’t appear in any U.S. state name -- Q!",
`Scotland has 421 words for “snow”`,
"The last letter added to the English alphabet wasn't Z — it was the letter J."];

const motivationalQuotes = 
[`“All our dreams can come true, if we have the courage to pursue them.” – Walt Disney`,
`“The secret of getting ahead is getting started.” – Mark Twain`,
`“Don’t limit yourself. Many people limit themselves to what they think they can do. You can go as far as your mind lets you. What you believe, remember, you can achieve.” – Mary Kay Ash`,
`“The best time to plant a tree was 20 years ago. The second best time is now.” – Chinese Proverb`,
`“If people are doubting how far you can go, go so far that you can’t hear them anymore.” – Michele Ruiz`,
`“Write it. Shoot it. Publish it. Crochet it, sauté it, whatever. MAKE.” – Joss Whedon`,
`“If we have the attitude that it’s going to be a great day it usually is.” – Catherine Pulsifier`];

const getRandomText = () => {
    let randomTextType = Math.floor(Math.random() * 3); //Randomly selects Joke, FunFact, or Motivational Quote
    if(randomTextType === 0){
        let randomJokeIndex = Math.floor(Math.random() * jokes.length);
        return jokes[randomJokeIndex];
    } else if(randomTextType === 1){
        let randomFunFactIndex = Math.floor(Math.random() * funFacts.length);
        return funFacts[randomFunFactIndex]
    }   else if(randomTextType === 2){
        let randomQuoteIndex = Math.floor(Math.random() * motivationalQuotes.length);
        return motivationalQuotes[randomQuoteIndex]
    }
}

console.log(getRandomText());