var iconInfo = {
    camel: { url: '/media/animal_icon/camel.PNG', scaledSize: new google.maps.Size(50, 50)},
    cat: { url: '/media/animal_icon/cat.png' },
    dog: { url: '/media/animal_icon/dog.png', scaledSize: new google.maps.Size(50, 50) },
    rhino: { url: '/media/animal_icon/rhino.png' },
    leopard: { url: '/media/animal_icon/leopard.png', scaledSize: new google.maps.Size(50, 50) },
    lion: { url: '/media/animal_icon/lion.png' },
    elephant: { url: '/media/animal_icon/elephant.png', scaledSize: new google.maps.Size(50, 50) },
};

var map;
var markers = {};

function initMap() {
    var bounds = new google.maps.LatLngBounds(
        new google.maps.LatLng(-75, -180),
        new google.maps.LatLng(75, 180)
    );

    map = new google.maps.Map(document.getElementById('map-container'), {
        center: { lat: 34.123, lng: 108.456 },
        zoom: 5,
        minZoom: 2,
        maxZoom: 13,
        mapTypeId: google.maps.MapTypeId.TERRAIN,
        mapTypeControl: false,
        fullscreenControl: false,
        streetViewControl: false,
        zoomControl: true,
        zoomControlOptions: {
            position: google.maps.ControlPosition.RIGHT_CENTER,
        },
        restriction: {
            latLngBounds: bounds,
            strictBounds: true,
        },
    });

    map.set('styles', mapstyle);

    initializeMarkers();
    attachCheckboxHandlers();
}

function initializeMarkers() {
    var animalData = [
        { position: { lat: 34.123, lng: 108.456 }, type: 'camel' },
        { position: { lat: 35.123, lng: 108.456 }, type: 'camel' },
        { position: { lat: 36.123, lng: 108.456 }, type: 'cat' },
        { position: { lat: 37.123, lng: 108.456 }, type: 'cat' },
        { position: { lat: 35.123, lng: 108.456 }, type: 'dog' },
        { position: { lat: 36.123, lng: 118.456 }, type: 'dog' },
        // 添加其他動物的初始化數據
    ];

    animalData.forEach(function(data, index) {
        markers[data.type + index] = createMarker(data.position, data.type);
    });
}

function createMarker(position, type) {
    var marker = new google.maps.Marker({
        position: position,
        map: null,
        icon: iconInfo[type].url,
        title: type,
    });

    if (iconInfo[type].scaledSize) {
        marker.setIcon(iconInfo[type]);
    }

    return marker;
}

function attachCheckboxHandlers() {
    var animalTypes = ['camel', 'cat', 'dog', 'rhino', 'leopard', 'lion', 'elephant'];

    animalTypes.forEach(function(type) {
        attachCheckboxHandler(type + 'Checkbox', type);
    });
}

function attachCheckboxHandler(checkboxId, markerType) {
    var checkbox = $('#' + checkboxId);

    checkbox.change(function () {
        if (checkbox.is(':checked')) {
            markers[markerType].setMap(map);
        } else {
            markers[markerType].setMap(null);
        }
    });
}

$(document).ready(function () {
    initMap();
    // 添加其他初始化代碼
});
