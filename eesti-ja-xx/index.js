const data = [
    {
        title:"IV sümfoonia III osa",
        artist:"G. Mahler",
        id:"mahler-4",
    },
    {
        title:"Rhapsody in Blue",
        artist:"G. Gershwin",
        id: "gershwin",
    },
    {
        title:"Montecchid ja Capulettid balletist „Romeo ja Julia“",
        artist:"S. Prokofjev",
        id: "prokofjev",
    },
    {
        title:"Bolero",
        artist:"M. Ravel",
        id: "ravel",
    },
    {
        title:"Fauni pärastlõuna",
        artist:"C. Debussy",
        id: "debussy",
    },
    {
        title:"Oo, Fortuna",
        artist:"C. Orff",
        id: "orff",
    },
    {
        title:"Heavy Smoke - City Life 5. osa",
        artist:"S. Reich",
        id: "reich",
    },
    {
        title:"Koyaanisqatsi",
        artist:"P. Glass",
        id: "koyaanisqatsi",
    },
    {
        title:"Ellujääja Varssavist",
        artist:"A. Schönberg",
        id: "schonberg",
    },
    {
        title:"Kontsert prepareeritud klaverile",
        artist:"J. Cage",
        id: "cage",
    },
    {
        title:"Kevadpühitsus",
        artist:"I. Stravinski",
        id: "stravinski",
    },
    {
        title:"VII sümfoonia I osa",
        artist:"D. Šostakovitš",
        id: "sostakovits",
    },
    {
        title:"II klaverikontserdi I osa",
        artist:"S. Rahmaninov",
        id: "rahmaninov",
    },
    {
        title:"II klaverikontserdi II osa",
        artist:"S. Rahmaninov",
        id: "rahmaninov2",
    },
    {
        title:"Sind surmani",
        artist:"A. Kunileid",
        id:"sind-surmani",
    },
    {
        title:"Mu isamaa on minu arm",
        artist:"A. Kunileid",
        id:"mu-isamaa",
    },
    {
        title:"Meestelaul",
        artist:"M. Härma",
        id:"meestelaul",
    },
    {
        title:"Tuljak",
        artist:"M. Härma",
        id:"tuljak",
    },
    {
        title:"Sanctum - oratooriumist „Joonase lähetamine“",
        artist:"R. Tobias",
        id:"sanctum",
    },
    {
        title:"Eks teie tea",
        artist:"R. Tobias",
        id:"eks-teie-tea",
    },
    {
        title:"Põhjavaim",
        artist:"M. Saar",
        id:"pohjavaim",
    },
    {
        title:"Leelo",
        artist:"M. Saar",
        id:"leelo",
    },
    {
        title:"Koit",
        artist:"M. Lüdig",
        id:"koit",
    },
    {
        title:"Jaani hobu",
        artist:"V. Tormis",
        id:"jaanihobu",
    },
    {
        title:"Oh laula ja hõiska",
        artist:"K.A. Hermann",
        id:"oh-laula",
    },
    {
        title:"Kauneimad laulud",
        artist:"F.A. Saebelmann",
        id:"kauneimad-laulud",
    },
    {
        title:"Taaveti laul nr 141",
        artist:"C. Kreek",
        id:"taavet-141"
    },
    {
        title:"Universumi hääled",
        artist:"U. Sisask",
        id:"universumi-haaled",
    },
    {
        title:"Sabatants - balletist „Kratt“",
        artist:"E. Tubin",
        id:"sabatants",
    },
    {
        title:"V sümfoonia I osa",
        artist:"E. Tubin",
        id:"viies-sumfoonia",
    },
    {
        title:"II sümfoonia I osa",
        artist:"L. Sumera",
        id:"teine-sumfoonia",
    },
    {
        title:"Fratres",
        artist:"A. Pärt",
        id:"fratres",
    },
    {
        title:"Arhitektoonika nr 6",
        artist:"E.S. Tüür",
        id:"arhitektoonika",
    },
    {
        title:"Kodumaine viis",
        artist:"H. Eller",
        id:"kodumaine-viis",
    },
];






for(var i = 0; i<data.length; i++){
    var song = data[i];

    $(".music-tiles").append(
        `<div class="music-tile pause" song-id="`+song.id+`">
            <div class="info">
                <p>`+song.title+`</p>
                <p>`+song.artist+`</p>
            </div>
            <p class="play-btn"><i class='material-icons'>play_arrow</i></p>
        </div>`
    );

    $(".audios").append(
     `<audio id="`+song.id+`">
        <source src="../audio/`+song.id+`.mp3" type="audio/mpeg">
        Sinu brauser ei toeta audiot.
    </audio>`
    );
}

$(".music-tile").click(function (){
    const id = $(this).attr("song-id");

    var audioElement = document.getElementById(id);
    var playSymbol = "play_arrow";

    var playButton = $(this).find(".play-btn");

    // Paused, play
    if($(this).hasClass("pause")){
        $(".music-tile:not(.pause)").click();
        $(this).removeClass("pause");
        audioElement.play();
        playSymbol = "pause";
    }else{
        // Pause playing
        $(this).addClass("pause");

        if(audioElement != null) audioElement.pause();
    }

    $(this).find(".play-btn > .material-icons").text(playSymbol);
});

// Start the song from the start on double click
$(".music-tile").dblclick(function (){
    const id = $(this).attr("song-id");

    var audioElement = document.getElementById(id);

    audioElement.currentTime = 0;
});

$(".mode-choice").click(function (){

    $(".mode-choice").removeClass("chosen");
    $(this).addClass("chosen");

    if($(this).hasClass("practice")){
        $(".learn-screen").hide();
        $(".practice-screen").show();
    }else if($(this).hasClass("learn")){
        $(".learn-screen").show();
        $(".practice-screen").hide();
    }
});



function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const randomIndex = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[randomIndex]] = [shuffled[randomIndex], shuffled[i]];
    }
    return shuffled;
}
  
var currentSong;
  
var testOrder = shuffleArray(data);
  
function chooseRandomSong(){
    if(!currentSong){
    return testOrder[0];
    }
    
    var currentIndex = testOrder.indexOf(currentSong);

    if(testOrder.length <= currentIndex + 1){
    testOrder = shuffleArray(data);
    return testOrder[0];
    }

    return testOrder[currentIndex + 1];
}



function changeSong(){
    $("#correct-hint").hide();
    var song = chooseRandomSong();

    currentSong = song;

    var audio = document.getElementById(song.id);

    audio.currentTime = 0;
    $("#correct-name").text(song.title);
    $("#correct-artist").text(song.artist);


    audio.play();

    $(".test-toggle-song > .material-icons").text("pause");
}

$(".start-test").click(function (){
    $(this).hide();

    // Choose a random song
    changeSong();


    $(".game-screen").show();
});

$(".test-toggle-song").click(function (){
    var audio = document.getElementById(currentSong.id);
    var buttonText = "⏸";

    if($(this).hasClass("pause")){
        $(this).removeClass("pause");
        audio.play();
        buttonText = "pause";
    }else{
        $(this).addClass("pause");
        audio.pause();
        buttonText = "play_arrow";
    }

    $(".test-toggle-song > .material-icons").text(buttonText);
});

$(".next-song").click(function (){
    $(".correct-answer").text("Õige vastus oli ");

    $("#correct-was-name").text(currentSong.title);
    $("#correct-was-artist").text(currentSong.artist);

    var audio = document.getElementById(currentSong.id);
    audio.pause();
    audio.currentTime = 0;

    changeSong();
});

$("#song-duration").on("input", function (){
    const val = $(this).val();

    var audio = document.getElementById(currentSong.id);
    audio.currentTime = val;
});

$("#view-correct").click(function (){
    $("#correct-hint").fadeToggle(200);
});
