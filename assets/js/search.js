window.onload = function () {

    const location = window.location.href;
    const url = new URL(location);
    const search_params = new URLSearchParams (url.search);
    
    // Check the search parameter is recived here or not
    // console.log(search_params.get('search'));
    if (!search_params.has('search') || search_params.get('search') == "")
    {
        window.location.href = "./index.html";
    }
    
    
    // If search_param is present then show the output
    fetch(`https://api.unsplash.com/search/photos?per_page=25&query=${search_params.get('search')}&client_id=${API_Key}`).then(convert_to_json)
    .then(function (data) {
        generateCard(data.results);

        // Showing the search name in the heading
        document.getElementById('search-result').innerText = search_params.get('search');

        // Showing the search name in the search box
        document.getElementsByName('search')[0].value = search_params.get('search');
    });

}

function generateCard(data) {
    // console.log(data);
    
    const container = document.getElementById('result_container');
    
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

        // console.log(img);
        anchor.appendChild(img);
        card.appendChild(anchor);
        container.appendChild(card);

    }
}