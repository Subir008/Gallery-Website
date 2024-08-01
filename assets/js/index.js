window.onload = function () {
    fetch(`https://api.unsplash.com/photos?per_page=50&client_id=${API_Key}`).then(convert_to_json)
    .then(function (data) {
        generateCard(data);
        
    });
}

function generateCard(data) {
    // console.log(data);
    const container = document.getElementById('image_container');

    // Iterating the loop to fetch all the data
    for (let i = 0 ; i < data.length; i++)
    {
        const single_data = data[i];

        // Creating one div, anchor, img tag to store, show and giving path to thge data 
        let card    = document.createElement('div');
        let anchor  = document.createElement('a');
        const img   = document.createElement('img');

        // Adding class to the div for adding css
        card.classList.add('item');
        anchor.href = `./details.html?id=${single_data.id}` ;

        card.style.backgroundColor = single_data.color;
        // console.log(single_data.urls.thumb);
        img.src = single_data.urls.thumb;

        // Appending the elemnents
        anchor.appendChild(img);
        card.appendChild(anchor);
        container.appendChild(card);

    }
}
