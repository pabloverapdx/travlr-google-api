// var apiKey = require('./../.env').apiKey;

      function initMap() {
        var mapDiv = document.getElementById('map');
        var map = new google.maps.Map(mapDiv, {
          center: {lat: 44.540, lng: -78.546},
          zoom: 8
        });
      }

$(document).ready(function(){
  $(window).load(initMap);
});
// });

//exports.apiKey = "AIzaSyA0AJs06PsJCeFHwxXByvnzW6t__KZh7p4";
