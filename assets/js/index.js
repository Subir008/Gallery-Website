window.onload = function () {
    fetch(`https://api.unsplash.com/photos?per_page=25&client_id=${API_Key}`).then(convert_to_json)
    .then(function (data) {
        generateCard(data);
        
    });
}

function generateCard(data) {
    // console.log(data);
    const container = document.getElementById('image_container');
    for (let i = 0 ; i < data.length; i++)
    {
        const single_data = data[i];

        let card    = document.createElement('div');
        let anchor  = document.createElement('a');
        const img   = document.createElement('img');

        card.classList.add('item');
        anchor.href = `./details.html?id=${single_data.id}` ;

        card.style.backgroundColor = single_data.color;
        // console.log(single_data.urls.thumb);
        img.src = single_data.urls.thumb;

        anchor.appendChild(img);
        card.appendChild(anchor);
        container.appendChild(card);

    }
}
