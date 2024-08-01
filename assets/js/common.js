const API_Key = "bxQcAY10M-_OYZKJLW8UOKd6kBcRp4E3_AbbKrir1qo";

function convert_to_json(data) {
    return data.json();
}

const backtotop = document.getElementById('back-to-top');

// Call one function to check window height when scroll
window.addEventListener('scroll',checkheight);

//Check the windows height
function checkheight() {
    if (window.scrollY > 200) {
        backtotop.style.display ='block';
    }else{
        backtotop.style.display ='none';
    }
}

//Scroll to top functionality
backtotop.addEventListener('click' , function () {
    window.scrollTo({
     top: 0, 
     behavior: 'smooth' 
    });
});


