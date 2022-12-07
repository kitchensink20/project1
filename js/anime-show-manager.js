class AnimeShowManager{
    constructor(arrayOfAnime){
        this.arrayOfAnime = arrayOfAnime;
        this.amountOfAnime = arrayOfAnime.length;
    }

    getArrayOfAnime(){
        return this.arrayOfAnime;
    }

    getAmountOfAnime(){
        return this.amountOfAnime;
    }

    shuffleAnimes(){
        let currentIndex = this.arrayOfAnime.length,  
            randomIndex;

        while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [this.arrayOfAnime[currentIndex], this.arrayOfAnime[randomIndex]] = [
            this.arrayOfAnime[randomIndex], this.arrayOfAnime[currentIndex]];
    }
    }

    refreshAnimeBlock(index){
        document.querySelector("#animeCover").src = "../pics/anime/"  + this.arrayOfAnime[index].id + ".jpg";
        document.querySelector("#title").textContent = this.arrayOfAnime[index].title;
        document.querySelector("#year").textContent = this.arrayOfAnime[index].year;
        document.querySelector("#description").textContent = this.arrayOfAnime[index].description;
        document.querySelector("#genre").textContent = this.arrayOfAnime[index].genre;
        document.querySelector("#animeLink").href =this.arrayOfAnime[index].animeLink;
    }
}