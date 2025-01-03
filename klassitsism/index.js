const data = [
    {
        title:"Üllatussümfoonia II osa (variatsioonid)",
        artist:"J. Haydn",
        id:"haydn1",
    },
    {
        title:"Keisrikvartett II osa (variatsioonid)",
        artist:"J. Haydn",
        id:"haydn2",
    },
    {
        title:"Trompetikontsert III osa (rondo)",
        artist:"J. Haydn",
        id:"haydn3",
    },
    {
        title:"40. sümfoonia I osa (sonaadivorm)",
        artist:"W. A. Mozart",
        id:"mozart1",
    },
    {
        title:"Klaverikontsert nr. 21 C-duur II osa",
        artist:"W. A. Mozart",
        id:"mozart2",
    },
    {
        title:"Väike öömuusika I osa",
        artist:"W. A. Mozart",
        id:"mozart3",
    },
    {
        title:"Requiem aeternam „Reekviemist“",
        artist:"W. A. Mozart",
        id:"mozart4",
    },
    {
        title:"Lacrimosa „Reekviemist“",
        artist:"W. A. Mozart",
        id:"mozart5",
    },
    {
        title:"Avamäng ooperile „Figaro pulm“",
        artist:"W. A. Mozart",
        id:"mozart6",
    },
    {
        title:"Figaro aaria ooperist „Figaro pulm“",
        artist:"W. A. Mozart",
        id:"mozart7",
    },
    {
        title:"Duett „Käekene mulle anna“ ooperist „Don Giovanni“",
        artist:"W. A. Mozart",
        id:"mozart8",
    },
    {
        title:"Öökuninganna aaria ooperist „Võluflööt“",
        artist:"W. A. Mozart",
        id:"mozart9",
    },
    {
        title:"Papageno aaria ooperist „Võluflööt“",
        artist:"W. A. Mozart",
        id:"mozart10",
    },
    {
        title:"9. sümfoonia 4. osa",
        artist:"L. van Beethoven",
        id:"beethoven1",
    },
    {
        title:"klaverisonaat „Appassionata“ 1. osa",
        artist:"L. van Beethoven",
        id:"beethoven2",
    },
    {
        title:"5. sümfoonia 1. osa",
        artist:"L. van Beethoven",
        id:"beethoven3",
    },
    {
        title:"„Kuupaistesonaat“ 1. osa",
        artist:"L. van Beethoven",
        id:"beethoven4",
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



var currentSong;

function chooseRandomSong(){
    return data[Math.floor(Math.random()*data.length)];
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
