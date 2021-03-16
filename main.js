a = [0, 1, 2, 2, 2, 3, 3, 4, 5, 6, 7, 8]
b = [0, 2, 3, 4]

function arraysCompare(a, b) {
	return a.filter(elementA => !b.includes(elementA))
}

console.log(arraysCompare(a, b))