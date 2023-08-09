$(document).ready(() => {
    // Query the form first
    const form = $('form')
    // Add an event listener to the form
    form.on("submit", (event) => {
        event.preventDefault();
        // capture the input value, the search term
        const searchTerm = $('#search-term').val();
        const improvedSearchTerm = searchTerm.replace(' ', '%20')
        // Make the ajax request
        // Split the string inbetween the spaces, and add a %20 inbetween the words
        console.log(`https://api.tvmaze.com/search/shows?q=${improvedSearchTerm}`)
        $.get(`https://api.tvmaze.com/search/shows?q=${improvedSearchTerm}`)
        // $.post('https://api.tvmaze.com/search/shows?q=the%20office', {tweet:"hello"})
        .then((data)=>{
            $("ul").empty();
            $('#search-term').val('');
            for (const element of data) {
                // console.log(element.show.name)
            //     const liElement = document.createElement("li");//<li></li>
            const liElementWithTheTextNode = $(`<li>${element.show.name}</li>`);//<li>Show Name</li>
            //     //Create a text node based on the show name
            //     const textNode = document.createTextNode(element.show.name);//Show Name
            //     liElement.append(textNode); //<li>Show Name</li>
            //     // Find out ul element and append the li to the ul
            //     document.querySelector("ul").append(liElement);
            $("ul").append(liElementWithTheTextNode);
            }
        })

    })

});