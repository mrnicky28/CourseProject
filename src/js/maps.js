let map;

function initMap() {
    let popupContent = '<p class="popup-content">Что угодно</p>';

    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 55.7663185, lng: 37.6213558},
        zoom: 14,
        mapId: 'ca3221c75247b1f4',
        gestureHandling: 'greedy'
    });
    let marker = new google.maps.Marker({
        position: {lat: 55.770932, lng: 37.5874724},
        map,
        animation: google.maps.Animation.BOUNCE,
    });

    let infowindow = new google.maps.InfoWindow({
        content: popupContent
    });
    google.maps.event.addListener(infowindow, 'closeclick', function () {
        marker.setAnimation(google.maps.Animation.BOUNCE);
    });

    marker.addListener('click', function () {
        marker.setAnimation(null);
    });

    marker.addListener('click', function () {
        infowindow.open(map, marker);
    });
    // new google.maps.Marker({
    //     position: {lat: 55.7583231, lng: 37.5983273},
    //     map,
    //     title: "Hello World!",
    //     animation: google.maps.Animation.BOUNCE
    // });


}