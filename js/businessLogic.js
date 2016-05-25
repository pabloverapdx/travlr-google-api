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
