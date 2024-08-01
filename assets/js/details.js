window.onload = function () {
  const location = window.location.href;
  const url = new URL(location);
  const search_params = new URLSearchParams(url.search);
  
  // Check the search parameter is recived here or not
  if (!search_params.has('id') || search_params.get('id') == "") {
    window.location.href = './index.html';
  }

  // If search_param is present then show the output
  fetch(`https://api.unsplash.com/photos/${search_params.get('id')}?client_id=${API_Key}`).then(convert_to_json)
  .then(function (data) {
    generateResult(data);
  });
};

function generateResult(data) {
    console.log(data);
    document.getElementById('detail_img').src = data.urls.small;
    document.getElementById('username').innerHTML = data.user.name;
    document.getElementById('detail').innerText = data.alt_description;
    document.getElementById('desc').innerText = data.description;
    document.getElementById('likes').innerText = data.likes;
    document.getElementById('views').innerText = data.views;
    document.getElementById('alt_desc').innerText = data.alt_description;
    document.getElementById('color-box').innerText = data.color;
    document.getElementById('color-box').style.backgroundColor = data.color;
    document.getElementById('download-button').href = data.links.download;

    document.getElementById('detail_img').style.borderColor = data.color ;
    
    let date = new Date(data.created_at);
    let upload_date = `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`;
    document.getElementById('date').innerHTML = upload_date;
    
}