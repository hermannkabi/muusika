const data = [
    {
        title:"Hommikumeeleolu süidist Peer Gynt",
        artist:"E.Grieg",
        id:"grieg1",
    },
    {
        title:"„Klaverikontsert“ 1. osa",
        artist:"E.Grieg",
        id:"grieg2",
    },
    {
        title:"Intermezzo ooperist „Talupoja au“",
        artist:"P. Mascagni",
        id:"mascagni",
    },
    {
        title:"„Lõpetamata sümfoonia“ 1. osa",
        artist:"F. Schubert",
        id:"schubert1",
    },
    {
        title:"sümfooniline poeem „Finlandia“",
        artist:"J. Sibelius",
        id:"sibelius1",
    },
    {
        title:"„6. sümfoonia“ 1. osa",
        artist:"P. Tšaikovski",
        id:"tsaikovski1",
    },
    {
        title:"„1. klaverikontsert“ 1. osa",
        artist:"P. Tšaikovski",
        id:"tsaikovski2",
    },
    {
        title:"„Lillede valss“ balletist „Pähklipureja“",
        artist:"P. Tšaikovski",
        id:"tsaikovski3",
    },
    {
        title:"Avamäng ooperile „Tannhäuser“",
        artist:"R. Wagner",
        id:"wagner",
    },
    {
        title:"Sümfooniline poeem „Prelüüdid“",
        artist:"F. Liszt",
        id:"liszt4",
    },
    {
        title:"Klaverikontsert A-moll I osa",
        artist:"F. Schumann",
        id:"schumann",
    },
    {
        title:"3. sümfoonia 3. osa ",
        artist:"J. Brahms",
        id:"brahms1",
    },
    {
        title:"Ungari tants nr 5",
        artist:"J. Brahms",
        id:"brahms2",
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
