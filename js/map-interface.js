// var apiKey = require('./../.env').apiKey;

      // function initMap() {
      //   var mapDiv = document.getElementById('map');
      //   var map = new google.maps.Map(mapDiv, {
      //     center: {lat: 44.540, lng: -78.546},
      //     zoom: 8
      //   });
      // }

/***********SHOWS CURRENT LOCATION ON MAP********************/
      // function initMap() {
      //   var map = new google.maps.Map(document.getElementById('map'), {
      //     center: {lat: -34.397, lng: 150.644},
      //     zoom: 6
      //   });
      //   var infoWindow = new google.maps.InfoWindow({map: map});
      //
      //   // Try HTML5 geolocation.
      //   if (navigator.geolocation) {
      //     navigator.geolocation.getCurrentPosition(function(position) {
      //       var pos = {
      //         lat: position.coords.latitude,
      //         lng: position.coords.longitude
      //       };
      //
      //       infoWindow.setPosition(pos);
      //       infoWindow.setContent('Location found.');
      //       map.setCenter(pos);
      //     }, function() {
      //       handleLocationError(true, infoWindow, map.getCenter());
      //     });
      //   } else {
      //     // Browser doesn't support Geolocation
      //     handleLocationError(false, infoWindow, map.getCenter());
      //   }
      // }
      //
      // function handleLocationError(browserHasGeolocation, infoWindow, pos) {
      //   infoWindow.setPosition(pos);
      //   infoWindow.setContent(browserHasGeolocation ?
      //                         'Error: The Geolocation service failed.' :
      //                         'Error: Your browser doesn\'t support geolocation.');
      // }
/**********************END SHOW CURRENT LOCATION****************/

//SHOW CURRENT LOCATION BASED ON INPUT
function initMap() {
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 8,
          center: {lat: -34.397, lng: 150.644}
        });
        var geocoder = new google.maps.Geocoder();

        document.getElementById('submit').addEventListener('click', function() {
          geocodeAddress(geocoder, map);
        });
      }

      function geocodeAddress(geocoder, resultsMap) {
        var address = document.getElementById('address').value;
        geocoder.geocode({'address': address}, function(results, status) {
          if (status === google.maps.GeocoderStatus.OK) {
            resultsMap.setCenter(results[0].geometry.location);
            var marker = new google.maps.Marker({
              map: resultsMap,
              position: results[0].geometry.location
            });
          } else {
            alert('Geocode was not successful for the following reason: ' + status);
          }
        });
      }
      //END CURRENT LOCATION BASED ON INPUT

$(document).ready(function(){
  $(window).load(initMap);
});
// });

//exports.apiKey = "AIzaSyA0AJs06PsJCeFHwxXByvnzW6t__KZh7p4";
