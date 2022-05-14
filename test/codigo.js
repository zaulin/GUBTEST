function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}

function pageonload() {



    readTextFile("test.json", function(text){
        var data = JSON.parse(text); //parse JSON
        console.log(data);
/*
        $("#data").find('tbody')
            .append($('<tr>')
                .append($('<td>')
                    .append($('<img>')
                        .attr('src', 'img.png')
                        .text('Image cell')
            )
        )
    );
*/

        $("#data").find('tbody')
            .append($('<tr>')
                .append($('<td>')
                    .text('Holi')
                    
                )
            );
        });
}