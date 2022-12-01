
    let animeCover = document.getElementById("animeCover");
    let index = 0;
    if(localStorage.getItem("anime")){
        animeCover.src =  "pics/anime/"  + localStorage.getItem("anime") + ".jpg";
        index = this.localStorage.getItem("anime");
        if(index > 12){
            index = 0;
            animeCover.src =  "pics/anime/"  + 0 + ".jpg";
            localStorage.removeItem("anime");
        }
    }

let likeBtn = document.querySelector("#like");
console.dir(likeBtn);
let anime = "anime";

likeBtn.addEventListener("click", function(){
    index++;

    localStorage.setItem(anime, index); 
    animeCover.src = null;
    animeCover.src = "pics/anime/" + index + ".jpg";
})


