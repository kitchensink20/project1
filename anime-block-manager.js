class AnimeShowManager{
    constructor(arrayOfAnime){
        this.arrayOfAnime = arrayOfAnime;
    }

    refreshAnimeBlock(index){
        document.querySelector("#animeCover").src =  "pics/anime/"  + this.arrayOfAnime[index].id + ".jpg";
        document.querySelector("#title").textContent = this.arrayOfAnime[index].title;
        document.querySelector("#year").textContent = this.arrayOfAnime[index].year;
        document.querySelector("#description").textContent = this.arrayOfAnime[index].description;
        document.querySelector("#genre").textContent = this.arrayOfAnime[index].genre;
        document.querySelector("#animeLinkBtn").onclick = "document.location=" + this.arrayOfAnime[index].animeLink;
    }
}