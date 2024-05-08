let backgroundImages = ['nemesis-lore-art.png', 'sadako-lore-art.jpg', 'the-dredge-lore-art.jpg', 
'the-singularity-lore-art.jpg', 'the-xenomorph-lore-art.jpg']

$(document).ready(function(){
    let randoNum = Math.floor(Math.random()* backgroundImages.length);
    console.log(randoNum);
    $('#builds').css("background-image", "url('BackgroundImages/"+backgroundImages[randoNum] +" ')")
})