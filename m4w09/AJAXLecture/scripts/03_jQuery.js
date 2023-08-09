$(document).ready(() => {
    // Query the button first
    const button = $('button')
    // Add an event listener to the button
    button.on("click", () => {
        // button.disabled = true;
        button.attr("disabled", true)
        // Make the ajax request
        $.get('https://api.tvmaze.com/search/shows?q=the%20office')
        // $.post('https://api.tvmaze.com/search/shows?q=the%20office', {tweet:"hello"})
        .then((data)=>{
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
        // $.ajax({
        //     url: 'https://api.tvmaze.com/search/shows?q=the%20office',
        //     // method:"POST", Default is set to GET, so we dont need to set it
        //     success: (data) => {
        //         console.log(data);
        //         // The shows are in a form of an array
        //         // We can loop through the array, and for each element, create an li and append the element to the ul
        //         for (const element of data) {
        //             // console.log(element.show.name)
        //         //     const liElement = document.createElement("li");//<li></li>
        //         const liElementWithTheTextNode = $(`<li>${element.show.name}</li>`);//<li>Show Name</li>
        //         //     //Create a text node based on the show name
        //         //     const textNode = document.createTextNode(element.show.name);//Show Name
        //         //     liElement.append(textNode); //<li>Show Name</li>
        //         //     // Find out ul element and append the li to the ul
        //         //     document.querySelector("ul").append(liElement);
        //         $("ul").append(liElementWithTheTextNode);
        //         }
        //     },
        //     error: (error) => {
        //         console.log(error);
        //     }
        // })
        // $.ajax({
        //     url: 'https://api.tvmaze.com/search/shows?q=the%20office',
        // }).then((data)=>console.log(data))
        // .catch()

    })

});