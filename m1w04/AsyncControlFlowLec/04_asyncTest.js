const higherOrderFunc = function (callback) {
  const data = { initials: "BG" };

  console.log("BEFORE TIMEOUT CALL");
  setTimeout(() => {
    data.initials = "YAV";
    console.log(data.initials);
    callback();
  });

  console.log("AFTER TIMEOUT CALL");
};

console.log("BEFORE MAIN CALL");
const result = higherOrderFunc(() => {
  console.log("INSIDE CALLBACK");
});
// Reference a function, not calling it => someFunction
// Invoking a function, calling it => someFunction();

console.log("AFTER MAIN CALL");
// Actual calls:
// BEFORE MAIN CALL
// BEFORE TIMEOUT CALL
// AFTER TIMEOUT CALL
// AFTER MAIN CALL
// YAV
// INSIDE CALLBACK


// Before Main Call || Before Timeout Call
// After Main Call || Before Timeout Call
// You're tricking me, there isnt a third one || YAV
// Nothing || Inside Callback
// Nothing || After Timeout Call