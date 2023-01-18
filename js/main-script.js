let animeShowManager, index;

if(!document.getElementById("animes-container")){ // if main-page.html is opened

    if(!localStorage.getItem("allAnimes")){
        fetch('http://localhost:5050/data')
        .then((response) => response.json())
        .then((data)  => { 

            animeShowManager = new AnimeShowManager(data); 
            animeShowManager.shuffleAnimes();
            index = 0;
    
            localStorage.setItem("animeId", 0);
            localStorage.setItem("totalAnimesAmount", data.length);
            localStorage.setItem("allAnimes", JSON.stringify(data));
    
            animeShowManager.refreshAnimeBlock(index);

            setTimeout(() => {
                animeShowManager.showMessageWindow();
              }, "1500")
        });
    }
    else if(!document.getElementById("animes-container")){
        animeShowManager = new AnimeShowManager(JSON.parse(localStorage.getItem("allAnimes")));
        
        index = localStorage.getItem("animeId");
        if(index >= Number(JSON.parse(localStorage.getItem("totalAnimesAmount"))))
            animeShowManager.showInfoAboutEmptyDB();
        else
            animeShowManager.refreshAnimeBlock(index);
    }

    document.querySelector("#like").addEventListener("click", () => {
        animeShowManager.addFavouriteAnime(index);

        index++;   
        localStorage.setItem("animeId", index); 
    });
    
    document.querySelector("#dislike").addEventListener("click", () => {
        index++;
        localStorage.setItem("animeId", index); 
    });

    document.addEventListener("keydown", (event) => {
        if(event.key == 'ArrowLeft')
            document.querySelector("#like").click();
        else if(event.key == 'ArrowRight')
            document.querySelector("#dislike").click();
    });

} else { // if my-favourite-ones.html is opened

    animeShowManager = new AnimeShowManager(JSON.parse(localStorage.getItem("allAnimes")));
    animeShowManager.showFavouriteAnimes();

}
