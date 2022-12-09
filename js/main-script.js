let animeShowManager, index;

if(!document.getElementById("animes-container")){ // if main-page.html is opened

    if(!localStorage.getItem("allAnimes")){
        fetch('../anime-storage.json')
        .then((response) => { return response.json(); })
        .then((data)  => { 
            animeShowManager = new AnimeShowManager(data); 
            animeShowManager.shuffleAnimes();
            index = 0;
    
            localStorage.setItem("animeId", 0);
            console.log(JSON.stringify(data));
            localStorage.setItem("allAnimes", JSON.stringify(data));
    
            animeShowManager.refreshAnimeBlock(index);
        });
    }
    else if(!document.getElementById("animes-container")){
        animeShowManager = new AnimeShowManager(JSON.parse(localStorage.getItem("allAnimes")));
        
        index = localStorage.getItem("animeId");
    
        animeShowManager.refreshAnimeBlock(index);
    }

    document.querySelector("#like").addEventListener("click", function(){
        animeShowManager.addFavouriteAnime(index);
        if(index < animeShowManager. getAmountOfAnime()-1)
            index++;
        else
            index = 0;
        
        localStorage.setItem("animeId", index); 
    });
    
    document.querySelector("#dislike").addEventListener("click", function(){
        animeShowManager.removeAnimeFromList(index);
        localStorage.setItem("animeId", index); 
    });

} else { // if my-favourite-ones.html is opened

    animeShowManager = new AnimeShowManager(JSON.parse(localStorage.getItem("allAnimes")));
    animeShowManager.showFavouriteAnimes();

}

