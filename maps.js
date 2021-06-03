let infoObj = [];
const markerOnMap = [
    {
        shopName: '585 Золото',
        description: `Amet assumenda, commodi consectetur consequatur deserunt dicta dolorum eius
            eligendi eos ex fugit`,
        LatLng: [{
            lat: 55.7963185,
            lng: 37.4813558,
        }],
        type: 'jewerelyStore'
    },
    {
        shopName: 'Московский ювелирный завод',
        description: `Amet assumenda, commodi consectetur consequatur deserunt dicta dolorum eius
            eligendi eos ex fugit id illo ipsa ipsum `,
        LatLng: [{
            lat: 55.7619505,
            lng: 37.5681994,
        }],
        type: 'jewerelyStore'
    },
    {
        shopName: 'Небо в алмазах',
        description: `Amet assumenda, commodi consectetur consequatur deserunt dicta dolorum eius
            eligendi eos ex fugit id illo ipsa ipsum m`,
        LatLng: [{
            lat: 55.7871354,
            lng: 37.6407228,
        }],
        type: 'jewerelyStore'
    },
    {
        shopName: 'ZIKO',
        description: `Amet assumenda, commodi consectetur consequatur deserunt dicta dolorum eius
            eligendi eos ex fugit id illo ipsa ipsum magnam molestiae nisi numquam optio provident`,
        LatLng: [{
            lat: 55.7225899,
            lng: 37.5857673,
        }],
        type: 'jewerelyStore'
    },
    {
        shopName: 'Бронницкий ювелир',
        description: `Amet assumenda, commodi consectetur consequatur deserunt dicta dolorum eius
            eligendi eos ex fugit id illo ipsa ipsum magnam molestiae nisi numquam optio provident`,
        LatLng: [{
            lat: 55.671951,
            lng: 37.5581663,
        }],
        type: 'jewerelyStore'
    },
    {
        shopName: 'Ювелирные украшения SOKOLOV',
        description: `Amet assumenda, commodi consectetur consequatur deserunt dicta dolorum eius
            eligendi eos ex fugit id illo ipsa ipsum magnam molestiae nisi numquam optio provident`,
        LatLng: [{
            lat: 55.67767500874081,
            lng: 37.77349381579132,
        }],
        type: 'jewerelyStore'
    },
    {
        shopName: 'Ювелирные изделия АДАМАС',
        description: `Amet assumenda, commodi consectetur consequatur deserunt dicta dolorum eius
            eligendi eos ex fugit id illo ipsa ipsum magnam molestiae nisi numquam optio provident
            quis quisquam soluta veritatis? Doloribus
            quisquamr`,
        address: 'ул.Московская 3б',
        LatLng: [{
            lat: 55.72960625608672,
            lng: 37.68871075150692,
        }],
        type: 'jewerelyStore'
    },
];
window.onload = function () {
    initMap();
}

// function addSlider(){
//     let container = document.createElement("div");
//     container.className = "container";
//     container.textContent = "Click me";
//     document.querySelector('.gm-style-iw-d').appendChild(container);
// }

function addMarkerOnMap() {

    for (let i = 0; i < markerOnMap.length; i++) {
        let contentString = '<h2 class="shop-name">' + markerOnMap[i].shopName + '</h2>' +
            '<p class="description">' + markerOnMap[i].description + '</p>' +
            '<img class="image-popup" src="../img/popap/yuvelirnii2.jpg" alt="">' +
            '<p class="address-information">' + markerOnMap[i].address + '</p>';

        const marker = new google.maps.Marker({
            position: markerOnMap[i].LatLng[0],
            icon: {
                url: "/img/icons/icons8-marker-48 (2).png",
            },
            map: map
        });

        const infoWindow = new google.maps.InfoWindow({
            content: contentString,
        });

        marker.addListener('click', function () {
            closeOtherInfo();
            infoWindow.open(marker.get('map'), marker)
            infoObj[0] = infoWindow;
        });
    }
}

function closeOtherInfo() {
    if (infoObj.length > 0) {
        infoObj[0].set("marker", null);
        infoObj[0].close();
        infoObj[0].length = 0;
    }
}

function initMap() {
    let centerMap = new google.maps.LatLng(55.7563185, 37.6213558);

    let myOptions = {
        center: centerMap,
        zoom: 11,
        mapId: 'ca3221c75247b1f4',
        mapTypeControl: true,
        fullscreenControl: false,
        gestureHandling: 'greedy'
    }
    map = new google.maps.Map(document.getElementById('map'), myOptions);

    addMarkerOnMap();
}




