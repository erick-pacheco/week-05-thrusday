let arr = [true, true, true]

function all(arr) {
	
	let result = true
	// Loop through every item in the array
	arr.forEach(number => {
	// If the item evaluates to false, return false
		if (number === false) {
			result = false
		}
	})
	;
	// If the loop ends, return true
	return result
}

console.log(all(arr))