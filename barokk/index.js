const data = [
    {
        title:"Prelüüd ja fuuga C-duur kogumikust HTK",
        artist:"J. S. Bach",
        id:"bach1",
    },
    {
        title:"Toccata d-moll",
        artist:"J. S. Bach",
        id:"bach2",
    },
    {
        title:"Brandenburgi kontsert nr. 3 G-duur I osa",
        artist:"J. S. Bach",
        id:"bach3",
    },
    {
        title:"Aaria orkestrisüidist nr. 3 D-duur",
        artist:"J. S. Bach",
        id:"bach4",
    },
    {
        title:"Matteuse passiooni lõpukoor",
        artist:"J. S. Bach",
        id:"bach5",
    },
    {
        title:"Kaanon",
        artist:"J. Pachelbel",
        id:"pachelbel",
    },
    {
        title:"Kevad I osa, soolokontsertide tsüklist „Aastaajad“",
        artist:"A. Vivaldi",
        id:"vivaldi1",
    },
    {
        title:"Talv I osa, soolokontsertide tsüklist „Aastaajad“",
        artist:"A. Vivaldi",
        id:"vivaldi2",
    },
    {
        title:"Xerxese largo ooperist „Xerxes“",
        artist:"G. Händel",
        id:"handel1",
    },
    {
        title:"Hallelujah koor oratooriumist „Messias“",
        artist:"G. Händel",
        id:"handel2",
    },
    {
        title:"Soprani aaria „Ma tean, et mu päästja elab“ oratooriumist „Messias“",
        artist:"G. Händel",
        id:"handel3",
    },
    {
        title:"Tulevärgimuusika. Avamäng",
        artist:"G. Händel",
        id:"handel4",
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
