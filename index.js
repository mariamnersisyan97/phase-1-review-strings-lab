// Write your code in this file!
const currentUser = 'Grace Hopper';
const welcomeMessage = `Welcome to Flatbook, ${currentUser}!`;
const excitedWelcomeMessage = welcomeMessage.toUpperCase();


const firstInitial = currentUser[0];
const restOfName = firstInitial.slice(0,1);
const shortGreeting = `Welcome, ${restOfName}!`;
