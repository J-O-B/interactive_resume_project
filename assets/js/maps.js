function initMap(){
    var map = new google.maps.Map(document.getElementById("map"),{
        zoom : 3,
        center: {
            lat: 46.619261, 
            lng: -33.134766
            }
        });
        var labels = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];

        var locations = [
            {lat: 53.369139, lng: -6.059306}, //Dublin
            {lat: 35.919047, lng: 14.490052}, //Malta
            {lat: 40.752581, lng: -73.974714}, //New York
            {lat: 42.346499, lng: -71.081627}, //Boston
            {lat: 25.730447, lng: -80.237489} //Miami
            ];

        var markers = locations.map(function(location,i){
            return new google.maps.Marker({
                position: location,
                label: labels[i % labels.length]
            });
        });
        new MarkerClusterer(map, markers, 
            {imagePath:"https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m"});
}