var map = {
    init: function() {
        var $map = $("#mapid");
        var latitude = parseFloat($map.data('latitude').replace(',', '.'));
        var longtitude = parseFloat($map.data('longtitude').replace(',', '.'));
        var zoom = parseFloat($map.data('zoom'));
        var map = L.map('mapid').setView([latitude, longtitude], zoom); 
        L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);
        L.marker([latitude,longtitude]).addTo(map);
            
    }
};

export default map;