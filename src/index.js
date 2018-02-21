/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
	var lovers = [];
	var loveTriangels = [];
	var total = 0;
	
	for (i = 0; i < preferences.length; i++) {

		var value1 = preferences[i];  
				
		var i2 = preferences[value1 - 1];
		var value2 = i2;
		
		var i3 = preferences[value2 - 1];
		var value3 = i3;
		var i1 = preferences[value3 - 1];
		
		if ((value1 != value2) && (value2 != value3) && (value3 != value1) && (value1 == i1 )) {
			loveTriangels = loveTriangels.concat(value1, value2, value3);
		}		
	}
		
	for (i = 0; i < loveTriangels.length; i++) {
	  if (lovers.indexOf(loveTriangels[i])== -1) {
		lovers.push(loveTriangels[i]);
		var total = lovers.length/3;
	  }
	}
	
	return total;
  }
