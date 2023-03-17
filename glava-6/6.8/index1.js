// Напишите функцию printNumbers(from, to), которая выводит число каждую секунду, начиная от from и заканчивая to.

// Сделайте два варианта решения.

// Используя setInterval.

// Используя рекурсивный setTimeout.

function printNumbers(from, to) {
	let from = from

	let timerId = setInterval(function () {
		alert(from)
		if (from == to) {
			clearInterval(timerId)
		}
		from++
	}, 1000)
}

// использование:
printNumbers(5, 10)

// Используем рекурсивный setTimeout:

function printNumbers(from, to) {
	let from = from

	setTimeout(function go() {
		alert(from)
		if (from < to) {
			setTimeout(go, 1000)
		}
		from++
	}, 1000)
}

// использование:
printNumbers(5, 10)
