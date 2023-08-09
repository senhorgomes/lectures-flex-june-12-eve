// https://api.tvmaze.com/search/shows?q=big%20bang%20theory
// Fetching for an api
fetch('https://api.tvmaze.com/search/shows?q=it%20crowd')
.then((response) => response.json())//Converting it from a json to something that we can use
.then((data) => console.log(data))//Console logging the parsed information