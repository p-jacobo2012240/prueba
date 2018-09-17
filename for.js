//API URL
const API_URL = 'http://localhost:3000/api/v1/geo';
//COORS
const OPT = { crossDomain: true }

const COORDS = (puntos)=>{
    console.log(`latitud: ${puntos.latitud}, longitud ${puntos.longitud}`);
}

function verCoords(){
    $.get(API_URL, OPT);
}

$(document).ready(function() {
    $.ajax({
        url: 'http://localhost:3000/api/v1/geo'
    }).then(function(data) {
       $('.latitud').append(data.latitud);
       $('.longitud').append(data.longitud);
    });
});



