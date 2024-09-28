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
    {
        title:"Polonees A-duur",
        artist:"F. Chopin",
        id:"chopin1",
    },
    {
        title:"Etüüd c-moll op.10 nr. 12 (Revolutsiooniline)",
        artist:"F. Chopin",
        id:"chopin2",
    },
    {
        title:"Vihmapiiskade prelüüd",
        artist:"F. Chopin",
        id:"chopin3",
    },
    {
        title:"Nokturn Es-duur op.9 nr.2",
        artist:"F. Chopin",
        id:"chopin4",
    },
    {
        title:"Nokturn \"Armuunelmad\"",
        artist:"F. Liszt",
        id:"liszt1",
    },
    {
        title:"Ungari rapsoodia",
        artist:"F. Liszt",
        id:"liszt2",
    },
    {
        title:"Etüüd Metsik jaht kogumikust Transendentsed etüüdid klaverile",
        artist:"F. Liszt",
        id:"liszt3",
    },
    {
        title:"Hommikumeeleolu süidist Peer Gynt",
        artist:"E.Grieg",
        id:"grieg1",
    },
    {
        title:"\"Klaverikontsert\" 1. osa",
        artist:"E.Grieg",
        id:"grieg2",
    },
    {
        title:"Intermezzo ooperist \"Talupoja au\"",
        artist:"P. Mascagni",
        id:"mascagni",
    },
    {
        title:"\"Lõpetamata sümfoonia\" 1. osa",
        artist:"F. Schubert",
        id:"schubert1",
    },
    {
        title:"sümfooniline poeem \"Finlandia\"",
        artist:"J. Sibelius",
        id:"sibelius1",
    },
    {
        title:"\"6. sümfoonia\" 1. osa",
        artist:"P. Tšaikovski",
        id:"tsaikovski1",
    },
    {
        title:"\"1. klaverikontsert\" 1. osa",
        artist:"P. Tšaikovski",
        id:"tsaikovski2",
    },
    {
        title:"\"Lillede valss\" balletist \"Pähklipureja\"",
        artist:"P. Tšaikovski",
        id:"tsaikovski3",
    },
    {
        title:"Avamäng ooperile Tannhäuser",
        artist:"R. Wagner",
        id:"wagner",
    },
    {
        title:"Sümfooniline poeem Prelüüdid",
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
    {
        title:"Soololaul \"Metshaldjas\"",
        artist:"F. Schubert",
        id:"schubert2",
    },
    {
        title:"Kroonimisstseen ooperist \"Boris Godunov\"",
        artist:"M. Mussorgski",
        id:"mussorgski",
    },
    {
        title:"Habanera ooperist \"Carmen\"",
        artist:"G. Bizet",
        id:"bizet1",
    },
    {
        title:"Don Jose aaria ooperist Carmen ",
        artist:"G. Bizet",
        id:"bizet2",
    },
    {
        title:"Hertsogi lauluke ooperist \"Rigoletto\"",
        artist:"G. Verdi",
        id:"verdi1",
    },
    {
        title:"Joogilaul ooperist \"Traviata\"",
        artist:"G. Verdi",
        id:"verdi2",
    },
    {
        title:"Orjade koor ooperist \"Nabucco\"",
        artist:"G. Verdi",
        id:"verdi3",
    },
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
        title:"Montecchid ja Capulettid balletist 'Romeo ja Julia'",
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
        title:"Sanctum - oratooriumist 'Joonase lähetamine'",
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
        title:"Sabatants - balletist 'Kratt'",
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
