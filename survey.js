const { RSA_X931_PADDING, RSA_SSLV23_PADDING } = require('constants');
const readline = require('readline');

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

r1.question('What do you think of Node.js? ', (answer1) => {
  r1.question('What\'s your name? ', (answer2) => {
    r1.question('What\'s an activity you like doing?', (answer3) => {
      r1.question('What do you listen to while doing that?', (answer4) => {
        r1.question('Which meal is your favourite (eg: dinner, brunch, etc.)', (answer5) => {
          r1.question('What\'s your favourite thing to eat for that meal?', (answer6) => {
            r1.question('Which sport is your absolute favourite?', (answer7) => {
              r1.question('What is your superpower? In a few words, tell us what you are amazing at!', (answer8) => {
                console.log(`${answer2} loves listening to ${answer4} while ${answer3}, 
                devouring ${answer6} for ${answer5}, prefers ${answer7} over any other sport, and 
                is amazing at ${answer8}`);
                r1.close();
              });
            });
          });
        });
      });
    });
  });
});



