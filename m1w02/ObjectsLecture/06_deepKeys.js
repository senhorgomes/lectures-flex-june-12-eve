//Easier way to access this bigObject?

const bigObject = {
  level: 1,
  floors: {
    basement: {
      level: -1,
    },
    main: {
      level: 1,
      floors: {
        second: {
          level: 2,
        }
      }
    }
  },
}
const mainFloor = bigObject.floors.main;
// console.log(bigObject["floors"]["main"]["floors"]["second"]["level"])
// console.log(bigObject.floors.main.floors.second.level)
console.log(mainFloor.floors.second.level)
// console.log(bigObject.floors.main.level)
console.log(mainFloor.level)