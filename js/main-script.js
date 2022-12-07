let animeShowManager, 
    index,
    arrayLength;

if(localStorage.getItem("animeJson")){
    
}

fetch('../anime-storage.json')
    .then((response) => { return response.json(); })
    .then((data)  => { 
        animeShowManager = new AnimeShowManager(data); 
        arrayLength = animeShowManager.getAmountOfAnime();
        animeShowManager.shuffleAnimes();

     
        if(localStorage.getItem("animeId"))
            index = this.localStorage.getItem("animeId");
        else
            index = 0;
        

        animeShowManager.refreshAnimeBlock(index);

    });

document.querySelector("#like").addEventListener("click", function(){
    if(index < arrayLength-1){
        if(index+1 != animeShowManager.getArrayOfAnime()[index].id)
            index++;
    }
    else
        index = 0;

    localStorage.setItem("animeId", index); 
});

document.querySelector("#dislike").addEventListener("click", function(){

});