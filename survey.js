const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// rl.question('What\'s your name? Nicknames are also acceptable :)', (answer1) => {
//   r

//   rl.close();
// });


rl.question('What\'s your name? Nicknames are also acceptable :)', (answer1) => {
  rl.question('What\'s an activity you like doing?', (answer2) => {
    rl.question('What do you listen to while doing that?', (answer3) => {
      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.)', (answer4) => {
        rl.question('What\'s your favourite thing to eat for that meal?', (answer5) => {
          rl.question('Which sport is your absolute favourite?', (answer6) => {
            rl.question('What is your superpower? In a few words, tell us what you are amazing at!', (answer7) => {
              console.log("Your name is: " + answer1 + "\n" +  
                          "An activity you like doing is " + answer2 + "\n" +
                          "You listen to " + answer3 + " while " + answer2 + "\n" +
                          "Your favourite meal is " + answer4 + "\n" +
                          "Your favourite thing to eat for " + answer4 + " is " + answer5 + "\n" +
                          "Your absolute favourite sport is: " + answer6 + "\n" +
                          "Your superpower is " + answer7);
              rl.close();
            })
          })
        })
      })
    })
  })
})