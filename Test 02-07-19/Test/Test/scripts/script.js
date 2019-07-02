$(function() {
    $.ajax({
        type: "GET",
        url: "./data/artists.csv",
        dataType: "text",
        success: function(data) { displayData(data); }
    });

    function displayData(data) {
        var artistList = $.csv.toObjects(data);

        for (var i = 0; i < artistList.length; ++i) {

            console.log("gdfg");

            let div = $("<div>", { "class": "artists", "id": i });

            div.append($("<img>", { "src": artistList[i].image, "class": "display-image" }));
            div.append($("<p>", { "class": "display-name" }).append(artistList[i].name));
            /*div.append($("<p>", { "class": "display-genre" }).append(artistList[i].genres));
            div.append($("<p>", { "class": "display-bio" }).append(artistList[i].bio));
            div.append($("<p>", { "class": "display-songs" }).append(artistList[i].songs));
            div.append($("<p>", { "class": "display-video" }).append(artistList[i].video));*/

            $(".artist-grid").append(div);


        }
    }

    
});