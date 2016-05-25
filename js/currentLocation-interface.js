
var Location = require ('./../js/businessLogic.js').Location;


  $(document).ready (function() {
    $("#location").submit(function(event){
      event.preventDefault();

    var userLocation = $('#userLocation').val();
    var userMiles = $('#userMiles').val();

    var newLocation = new Location (userLocation, userMiles);
    $('#locationSubmit').click(function() {
      $('#locationResult').text(newLocation.read());
    })
  });
});
