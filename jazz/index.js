const data = [
    {
        title:"Gospel - Down By The Riverside",
        artist:"Mahalia Jackson",
        id:"down-by-the-riverside",
    },
    {
        title:"Blues - Nobody Knows You When You're Down And Out",
        artist:"Bessie Smith",
        id:"nobody-knows",
    },
    {
        title:"Ragtime - The Entertainer",
        artist:"Scott Joplin",
        id:"entertainer",
    },
    {
        title:"Boogie woogie",
        artist:"Boogie woogie",
        id:"boogie-woogie",
    },
    {
        title:"New Orleans'i jazz - Dippermouth Blues",
        artist:"King Oliver's Creole Jazz Band",
        id:"dippermouth",
    },
    {
        title:"New Orleans'i jazz - What a Wonderful World",
        artist:"Louis Armstrong",
        id:"what-a-wonderful-world",
    },
    {
        title:"Swing - Sing Sing Sing - from 'Hollywood Hotel'",
        artist:"Benny Goodman orchestra",
        id:"sing-sing-sing",
    },
    {
        title:"Swing - In The Mood",
        artist:"Glenn Miller",
        id:"in-the-mood",
    },
    {
        title:"Swing - It don`t Mean a Thing",
        artist:"Duke Ellington",
        id:"it-dont-mean-a-thing",
    },
    {
        title:"Scat-laul - One Note Samba",
        artist:"Ella Fitzgerald",
        id:"one-note-samba",
    },
    {
        title:"Bebop",
        artist:"Charlie Parker",
        id:"bebop",
    },
    {
        title:"Bebop - A Night in Tunisia",
        artist:"Dizzy Gillespie",
        id:"a-night-in-tunisia",
    },
    {
        title:"Cool jazz - Blues in Green",
        artist:"Miles Davis",
        id:"blues-in-green"
    },
    {
        title:"Free jazz",
        artist:"Ornette Coleman Sextet",
        id:"free-jazz",
    },
    {
        title:"Jazz rock (fusion) - Burn",
        artist:"Miles Davis (ja tema ansambel)",
        id:"burn",
    },
    {
        title:"Jazz rock (fusion) - Birdland",
        artist:"Weather Report",
        id:"birdland",
    },
    {
        title:"Jazz rock (fusion) - Cantelope Island",
        artist:"Herbie Hancock (ja tema ansambel)",
        id:"cantelope-island",
    },
    {
        title:"World jazz - Bossa Nova",
        artist:"Latin jazz",
        id:"bossa-nova",
    },
    {
        title:"Acid jazz - Virtual Insanity",
        artist:"Jamiroquai",
        id:"virtual-insanity",
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