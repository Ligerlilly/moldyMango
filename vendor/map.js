function initialize() {
  var mapCanvas = document.getElementById('map');
  var mapOptions = {
    center: new google.maps.LatLng(45.5434085,-122.654422 ),
    zoom: 12,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  var map = new google.maps.Map(mapCanvas, mapOptions);
  var myLatlng = new google.maps.LatLng(45.5216617,-122.6754343);
  var marker = new google.maps.Marker({
    position: myLatlng,
    title:"Hello World!"
  });
  marker.setMap(map);
}
google.maps.event.addDomListener(window, 'load', initialize);
//var mapLink = document.getElementById('map-link');
