// Query the button first
const searchButton = document.querySelector('button')
// Add an event listener to the button
searchButton.addEventListener('click', () => {
    searchButton.disabled = true;
    // Make the fetch request
    fetch('https://api.tvmaze.com/search/shows?q=the%20office')
        .then((response) => response.json())//Converting it from a json to something that we can use
        // .then((data) => console.log(data))//Console logging the parsed information
        // Add it to our document
        .then((data)=> {
            // The shows are in a form of an array
            // We can loop through the array, and for each element, create an li and append the element to the ul
            for(const element of data){
                // console.log(element.show.name)
                const liElement = document.createElement("li");//<li></li>
                //Create a text node based on the show name
                const textNode = document.createTextNode(element.show.name);//Show Name
                liElement.append(textNode); //<li>Show Name</li>
                // Find out ul element and append the li to the ul
                document.querySelector("ul").append(liElement);
            }
        })
})
