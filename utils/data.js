const users = [
    'janedoe1',
    'bobsmith99',
    'frogsRcool',
    'kittenlover07',
    'jerseygirl123',
    'timotheechalamet_',
  ];

const names = [
    'John Smith',
    'Jane Doe',
    'Kate Hudson',
    'Jennifer Brown',
    'Bob Smith',
    'Tom Jones',
]
  
  const thoughts = [
    'Frogs are cool',
    'My favorite TV show is House of the Dragon',
    'I am not a Yankees fan',
    'I love to travel',
    'My favorite color is purple',
    'Coding is cool',
  ];
  
  const reactions = [,
    'Agree',
    'Disagree',
    'Like',
    'Dislike',
    'Love',
  ];

// Get a random item given an array
const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

const getRandomThought = () => getRandomArrItem(thoughts);

const getRandomReaction = () => getRandomArrItem(reactions);

const genRandomIndex = (arr) => Math.floor(Math.random() * arr.length);

const getRandomUserName = () =>
  `${getRandomArrItem(users)}${Math.floor(Math.random() * 10 + 1)}`;

// Gets a random full name
const getRandomName = () => `${getRandomArrItem(users)} ${getRandomArrItem(names)}`;

// Export the functions for use in seed.js
module.exports = {
  getRandomName,
  getRandomUserName,
  genRandomIndex,
  getRandomThought,
  getRandomReaction,
  getRandomArrItem,
};
  