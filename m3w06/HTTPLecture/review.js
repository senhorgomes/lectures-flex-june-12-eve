const randomFunction = () =>{
    console.log("A message")
}

const higherOrderFunction = (callback) => {
    callback()
}

higherOrderFunction(randomFunction)