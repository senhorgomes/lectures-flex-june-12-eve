const carOneObject = {
    doors: 4,
    color: "pink",
    transmission: "automatic",
    wheels: 4
  }
  const copyOfThisObject = {...carOneObject}
  
carOneObject.wheels = "color"

  console.log(copyOfThisObject)
  console.log(carOneObject)