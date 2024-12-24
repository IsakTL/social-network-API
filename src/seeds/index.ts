import db from '../config/connection.js';
import { User } from '../models/index.js';
import cleanDB from './cleanDB.js';
import { getRandomName, getRandomThoughts } from './data.js';

try {
  await db();
  await cleanDB();

  // Create empty array to hold the users
  const users = [];

  // Loop 20 times -- add users to the users array
  for (let i = 0; i < 20; i++) {
    // Get random thought objects
    const thoughts = getRandomThoughts(2);

    const first = getRandomName();
    const last = getRandomName();
    const username = first + last;
    const email = `${first}${last[0]}@mail.ml`;

    users.push({
      username,
      email,
      thoughts
    });
  }

  // Add users to the collection and await the results
  await User.create(users);

  // Log out the seed data to indicate what should appear in the database
  console.table(users);
  console.info('Seeding complete! 🌱');
  process.exit(0);
} catch (error) {
  console.error('Error seeding database:', error);
  process.exit(1);
}

