function initMap() {
  var uluru = {lat: 42.5378607, lng: -84.85510169999998};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 11,
    center: uluru
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });
}
