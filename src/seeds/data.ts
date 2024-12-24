const names = [
  'Aaran',
  'Aaren',
  'Aarez',
  'Aarman',
  'Aaron',
  'Aaron-James',
  'Aarron',
  'Aaryan',
  'Aaryn',
  'Aayan',
  'Aazaan',
  'Abaan',
  'Abbas',
  'Abdallah',
  'Abdalroof',
  'Abdihakim',
  'Abdirahman',
  'Abdisalam',
  'Abdul',
  'Abdul-Aziz',
  'Abdulbasir',
  'Abdulkadir',
  'Abdulkarem',
  'Smith',
  'Jones',
  'Coollastname',
  'enter_name_here',
  'Ze',
  'Zechariah',
  'Zeek',
  'Zeeshan',
  'Zeid',
  'Zein',
  'Zen',
  'Zendel',
  'Zenith',
  'Zennon',
  'Zeph',
  'Zerah',
  'Zhen',
  'Zhi',
  'Zhong',
  'Zhuo',
  'Zi',
  'Zidane',
  'Zijie',
  'Zinedine',
  'Zion',
  'Zishan',
  'Ziya',
  'Ziyaan',
  'Zohaib',
  'Zohair',
  'Zoubaeir',
  'Zubair',
  'Zubayr',
  'Zuriel',
  'Xander',
  'Jared',
  'Courtney',
  'Gillian',
  'Clark',
  'Jared',
  'Grace',
  'Kelsey',
  'Tamar',
  'Alex',
  'Mark',
  'Tamar',
  'Farish',
  'Sarah',
  'Nathaniel',
  'Parker',
];

const appNames = [
  'Decision Tracker',
  'Find My Phone',
  'PianoLearner2000',
  'Starbase Defender',
  'Tower Defense',
  'Monopoly Money Manager',
  'Movie Trailer App',
  'Helloworld.js',
  'Stupid Social Media App',
  'Notes app',
  'Messages app',
  'Email',
  'Compass app',
  'Firefox',
  'Running app',
  'Cooking app',
  'Poker app',
  'DoorDashDoor',
];

const addendum = [
  'Has anyone heard of ',
  'What\'s all this about ',
  'Hey check out ',
  'I love ',
  'I hate ',
  'I like ',
  'Not a fan of ',
  'Sheesh, ',
  'Gonna do a standup bit about ',
  'New tutorial on my yt channel on ',
  'Cannot figure out this darn ',
]

// Get a random item given an array
export const getRandomArrItem = (arr: any) => arr[Math.floor(Math.random() * arr.length)];

// Gets a random name
export const getRandomName =() =>
  getRandomArrItem(names);

// Function to generate random assignments that we can add to student object.
export const getRandomThoughts = (int: number) => {
  const results = [];
  for (let i = 0; i < int; i++) {
    results.push({
      thoughtText: getRandomArrItem(addendum) + getRandomArrItem(appNames),
    });
  }
  return results;
};
