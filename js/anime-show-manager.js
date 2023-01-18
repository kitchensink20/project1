class AnimeShowManager{

    //---------concructor-------------------------------

    constructor(arrayOfAnime){
        this.arrayOfAnime = arrayOfAnime;
        this.amountOfAnime = arrayOfAnime.length;
    }

    //---------getters---------------------------------

    getArrayOfAnime(){
        return this.arrayOfAnime;
    }

    getAmountOfAnime(){
        return this.amountOfAnime;
    }

    //--------methods for the main page----------------

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
        /*console.log("dvsd;");
        this._downloadImage("../pics/anime/"  + this.arrayOfAnime[index].id + ".jpg")
            .then(() => {
                document.querySelector("#animeCover").src = "../pics/anime/"  + this.arrayOfAnime[index].id + ".jpg";
                console.log("dfvskd")
                //document.querySelector("#animeCover").src = this.arrayOfAnime[index].imgSrc;
                document.querySelector("#title").textContent = this.arrayOfAnime[index].title;
                document.querySelector("#year").textContent = this.arrayOfAnime[index].year;
                document.querySelector("#description").textContent = this.arrayOfAnime[index].description;
                document.querySelector("#genre").textContent = this.arrayOfAnime[index].genre;
                document.querySelector("#animeLink").href =this.arrayOfAnime[index].animeLink;
            }, err => {
                console.log(err.message);
            });*/
    }

    removeAnimeFromList(index){
        this.arrayOfAnime = JSON.parse(localStorage.getItem("allAnimes"));
        
        this.arrayOfAnime.splice(index, 1);

        localStorage.setItem("allAnimes", JSON.stringify(this.arrayOfAnime));
    }

    showInfoAboutEmptyDB(){
        let animeInfoBlock = document.querySelector('.mainSect');
        animeInfoBlock.querySelectorAll('*').forEach(el => {
            el.style.display = 'none'; 
        });

        let emptyDBBlock = document.querySelector('.emptyDB');
        emptyDBBlock.style.display = 'flex';
    }

    //--------methods for my-favourite-ones page--------------

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
                document.querySelectorAll(".animeLinkPic")[i].href = this.favouriteAnimes[i].animeLink; 

                document.querySelectorAll("#crossBtn")[i].addEventListener("mouseover", (e) => { e.target.src="../pics/crosshover.png" });
                document.querySelectorAll("#crossBtn")[i].addEventListener("mouseout", (e) => { e.target.src="../pics/cross.png" });
                document.querySelectorAll("#crossBtn")[i].addEventListener("click", () => {
                    this.removeAnimeFromFavourites(i);
                    this.favouriteAnimes.splice(i, 1);
                });
            }
        }
    }

    removeAnimeFromFavourites(index){
        let favAnimes = JSON.parse(localStorage.getItem("favouriteAnimes"));
        
        favAnimes.splice(index, 1);

        if(favAnimes.length == 0){
            localStorage.removeItem("favouriteAnimes");
        }
        else
            localStorage.setItem("favouriteAnimes", JSON.stringify(favAnimes));
    }









    _downloadImage(url){
        let promise = new Promise(function(resolve, reject){
            let image;
            image.src = url;

            image.onload = function() {
                resolve(image);
            }

            image.onerror = function(e) {
                reject(new Error("Failed to load image " + url));
            }
        });

        return promise;
    }
}