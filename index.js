const data = [
    {
        title:"Blues in Green - Cool jazz",
        artist:"Miles Davis",
        id:"blues-in-green"
    },
];

for(var i = 0; i<data.length; i++){
    var song = data[i];

    $(".music-tiles").append(
        `<div class="music-tile" id="`+song.id+`">
            <div class="info">
                <p>`+song.title+`</p>
                <p>`+song.artist+`</p>
            </div>
            <p class="play-btn pause">▶</p>
        </div>`
    );

    $(".audios").append(
     `<audio id="`+song.id+`">
        <source src="audio/`+song.id+`.mp3" type="audio/mpeg">
        Sinu brauser ei toeta audiot.
    </audio>`
    );
}

$(".music-tile").click(function (){
    alert("Clicked " + $(this).find(".play-btn").hasClass("pause"));
});