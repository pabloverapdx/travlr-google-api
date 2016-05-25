exports.Location = function(location, miles) {
  this.location = location;
  this.miles = miles;
};



// exports.Miles = function(miles) {
//   this.miles = miles;
// };
//
exports.Location.prototype.read = function() {
  return this.location + " and "  + this.miles;

};








// Map Function
// function initMap() {
//         var mapDiv = document.getElementById('map');
//         var map = new google.maps.Map(mapDiv, {
//           center: {lat: 44.540, lng: -78.546},
//           zoom: 8
//         });
//       }
