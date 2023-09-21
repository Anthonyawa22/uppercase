const greetings   = ['heya', 'some', 'go'];
const newGreetings = [];
const shoutGreeting = greetings.map(greet => {
    newGreetings.push(greet.toUpperCase() + '!')
});

console.log(newGreetings);