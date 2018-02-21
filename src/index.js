/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  var lovers = [];
	var loveTriangels = [];
	
	for (i = 0; i < preferences.length; i++) {
		//1
		var value1 = preferences[i];  
		//2	
		var i2 = preferences[value1 - 1];
		var value2 = i2;
		//3
		var i3 = preferences[value2 - 1];
		var value3 = i3;
		var i1 = preferences[value3 - 1];
		
		if ((value1 != value2) && (value2 != value3) && (value3 != value1) && (value1 == i1 )) {
			lovers.splice(-1, 0, value1, value2, value3);
		}		
	}	
	
	nextInput:
        for (var x = 0; x < lovers.length; x++) {
          var element = lovers[x]; // для каждого элемента
          for (var y = 0; y < loveTriangels.length; y++) { // ищем, был ли он уже?
            if (loveTriangels[y] == element) continue nextInput; // если да, то следующий
          }
          var total = loveTriangels.push(element)/3;
        }
		
	return total;
}
