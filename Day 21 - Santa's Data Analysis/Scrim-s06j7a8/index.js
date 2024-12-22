import { toysRequested } from './data.js'

/*
The run up to Christmas is quite a data-intensive time for Santa. In order to understand market trends, Santa's Data Elves have collated sample children’s wish list data from 4 locations and now need to know which was the most popular toy requested overall. This will help with procurement for next year. 

**Task**
- Your task is to find the most requested toy from the array of objects “toysRequested”. But remember: some toys appear in more than one location!

Expected output: "The most popular toy is 🎲 board games with 9000 requests.""

**Stretch Goal**
- Complete this challenge using the .flatMap() method to work with the various "toys" arrays.

*/ 

// Using flatMap to get an array of all toy objects
const allToys = toysRequested.flatMap(location => location.toys);
// with this reduce got it the maximum for each one 
const toyCounts = allToys.reduce((acc, toy) => {
    const toyType = Object.keys(toy)[0];
    const toyCount = toy[toyType];

    acc[toyType] = (acc[toyType] || 0) + toyCount;
    return acc;
}, {});

const mostPopularToy = Object.entries(toyCounts).reduce((a, b) => (a[1] > b[1] ? a : b));

console.log(`The most popular toy is ${mostPopularToy[0]} with ${mostPopularToy[1]} requests.`);