const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const { team1, team2, players, score, scored, date, odds } = game

// 1. loop to console the scored 
scored.forEach((name, index) => console.log(`Goal ${index}: ${name}`))

// 2+3. loop the object to calculate the average odd and log
const sumGameOdd = Object.keys(odds).reduce((accumulator, currentValue) => {
  console.log(`Odd of victory ${currentValue} : ${odds[currentValue]}`)
  return accumulator+odds[currentValue]
},0) 
console.log(sumGameOdd/Object.keys(odds).length)

// 4. make scorers object
const scorers = scored.reduce((accumulator, currentValue) => {
  
  if (!accumulator[currentValue]) {
   return {
      ...accumulator,
      [currentValue] : 1
    }
  } else {
    return  {
      ...accumulator,
      [currentValue] : Number(accumulator[currentValue]) + 1
    }
  } 
}
,{})
console.log(scorers)
