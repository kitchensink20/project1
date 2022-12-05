let arrayOfAnime = [ {
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
},
{
    "title":"Toradora!",
    "genre": "Romantic comedy, Slice of life",
    "year": "2009",
    "description": "It’s Ryuji’s first day as a junior in high school and it seems as if things are looking up. He gets to sit in between his only friend, Yusaku, and, more importantly, the girl he’s secretly crushing on, Minori Kushieda. But just when he thinks the stars are aligned in his favor, he unwittingly crosses the most feared girl in school, Taiga Aisaku, making her onto his arch enemy. To top it off, Taiga has moved in right next door to Ryuji and happens to be Minori’s best friend! Can this school year possibly get any worse?!",
    "animeLink": "https://www.crunchyroll.com/series/G6P8PXJW6/toradora",
    "id": 6
},
{
    "title":"91 days",
    "genre":"Crime drama Gangster, Thriller Period",
    "year":"2016",
    "description":"During Prohibition, the law held no power and the mafia ruled the town. The story takes place in Lawless, a town thriving on black market sales of illicitly brewed liquor. One day, Avilio receives a letter from a mysterious sender, prompting him to return to Lawless for revenge. He then infiltrates the Vanetti family, the ones responsible for his family's murder, and sets about befriending the don's son, Nero, to set his vengeance in motion. Killing brings more killing, and revenge spawns more revenge.",
    "animeLink":"https://www.crunchyroll.com/series/GRE5K3NQ6/91-days",
    "id": 7
},
{
    "title":"Naruto",
    "genre":"Adventure, Fantasy comedy, Martial arts",
    "year":"1999",
    "description":"The Village Hidden in the Leaves is home to the stealthiest ninja. But twelve years earlier, a fearsome Nine-tailed Fox terrorized the village before it was subdued and its spirit sealed within the body of a baby boy.",
    "animeLink":"https://www.crunchyroll.com/series/GY9PJ5KWR/naruto",
    "id": 8
},
{
    "title":"Violet Evergarden",
    "genre":"Coming-of-age, Steampunk",
    "year":"2015",
    "description":"In the aftermath of a great war, Violet Evergarden, a young female ex-soldier, gets a job at a writers' agency and goes on assignments to create letters that can connect people. After four long years of conflict, The Great War has finally come to an end.",
    "animeLink":"https://9anime.se/watch/violet-evergarden-59?ep=1456",
    "id": 9
},
{
    "title":"Tokyo magnitude",
    "genre":"Disaster",
    "year":"2009",
    "description":"In 2012, Mirai, a middle school freshman girl, goes to Tokyo’s artificial Odaiba Island for a robot exhibition with her brother Yuuki at the start of summer vacation. A powerful tremor registering 8.0 on the JMA scale emanates from an ocean trench, the famed Tokyo Tower and Rainbow Bridge crumble and fall, and the landscape of Tokyo changes in seconds. With the help of a motorcycle delivery woman named Mari, Mirai and Yuuki strive to head back to their Setagaya home in western Tokyo.",
    "animeLink":"https://www.justwatch.com/us/tv-show/tokyo-magnitude-8-0",
    "id": 10
}];

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



