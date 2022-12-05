/*let arrayOfAnime = [ {
    title: "The promised Neverland",
    genre: "Dark fantasy, Science fiction, Thriller",
    year: "2019",
    description: "When three gifted kids at an isolated idyllic orphanage discover the secret and sinister purpose they were raised for, they look for a way to escape from their evil caretaker and lead the other children in a risky escape plan.",
    id: 0
},
{
    title: "Death note",
    genre: "Mystery, Psychological thriller, Supernatural thriller",
    year: "2003",
    description: "Based on the famous Japanese manga written by Tsugumi Ohba and Takeshi Obata, Death Note follows a high school student who comes across a supernatural notebook, realizing it holds within it a great power; if the owner inscribes someone's name into it while picturing their face, he or she will die.",
    id: 1
},
{
    title: "Hunter-Hunter",
    genre: "Adventure, Fantasy, Martial arts",
    year: "2011",
    description: "The story focuses on a young boy named Gon Freecss who discovers that his father, who left him at a young age, is actually a world-renowned Hunter, a licensed professional who specializes in fantastical pursuits such as locating rare or unidentified animal species, treasure hunting, surveying unexplored enclaves, or hunting down lawless individuals. Gon departs on a journey to become a Hunter and eventually find his father.",
    id: 2
},
{
    title: "Fullmetal alchemist: Brotherhood",
    genre: "Adventure, Dark fantasy, Steampunk",
    year: "2009",
    description: "The series follows the story of two alchemist brothers, Edward and Alphonse Elric, who want to restore their bodies after a disastrous failed attempt to bring their mother back to life through alchemy.",
    id: 3
},
{
    title: "Erased",
    genre: "Mystery, science fiction, thriller",
    year: "2016",
    description: "Erased follows the Story of Satoru Fujinuma who is a 29 year old aspiring manga artist with the ability to travel backwards in time to prevent terrible things from happening. After the murder of a loved on he is launched back further in time than he has ever gone to prevent the tragedy from taking place.",
    id: 4 
},
{
    title: "Rascal Does Not Dream Of Bunny Girl Senpai",
    genre: "Psychological, Supernatural",
    year: "2019",
    description: "The bunny girl's real identity is Mai Sakurajima, a teenage celebrity who is currently an inactive high school senior. For some reason, her charming figure does not reflect in the eyes of others. In the course of revealing the mystery behind this phenomenon, Sakuta begins to explore his feelings towards Mai.",
    id: 5 
}];*/

let arrayOfAnime = JSON.parse("anime-storage.json");
let animeShowManager = new AnimeShowManager(arrayOfAnime);
let index;

if(localStorage.getItem("animeId"))
    index = this.localStorage.getItem("animeId");
else
    index = 0;

animeShowManager.refreshAnimeBlock(index);

document.querySelector("#like").addEventListener("click", function(){
if(index != arrayOfAnime.length-1)
    index++;
else
    index = 0;

localStorage.setItem("animeId", index); 
});



