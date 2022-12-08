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

    addFavouriteAnime(index){
        let favouriteAnimes = JSON.parse(localStorage.getItem("favouriteAnimes"));
        if(favouriteAnimes == null) favouriteAnimes = [];

        let currentAnime = this.arrayOfAnime[index];
        favouriteAnimes.push(currentAnime);

        localStorage.setItem("favouriteAnimes", JSON.stringify(favouriteAnimes));
    }

    showFavouriteAnimes(){
        if(localStorage.getItem("favouriteAnimes")){
            document.getElementById("animes-container").classList.remove("empty-container");
            document.getElementById("animes-container").classList.add("animes-container");
            let temp = document.getElementsByTagName("template")[0];

            this.favouriteAnimes = JSON.parse(localStorage.getItem("favouriteAnimes"));

            document.querySelector("#animes-container").innerHTML = "";

            for(let i = 0; i < this.favouriteAnimes.length; i++){
                let tempClone = temp.content.cloneNode(true);
                document.querySelector("#animes-container").append(tempClone);
                document.querySelectorAll(".animeCover")[i].src = "../pics/anime/"  + this.favouriteAnimes[i].id + ".jpg";
                document.querySelectorAll(".animeTitle")[i].textContent = this.favouriteAnimes[i].title;
            }
        }
    }

    removeAnimeFromList(index){
        this.arrayOfAnime = JSON.parse(localStorage.getItem("allAnimes"));
        
        //this.arrayOfAnime.splice
    }
}