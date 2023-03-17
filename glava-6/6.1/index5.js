// Выведите односвязный список из предыдущего задания Вывод односвязного списка в обратном порядке.

// Сделайте два решения: с использованием цикла и через рекурсию.

// С использованием рекурсии

let list = {
	value: 1,
	next: {
		value: 2,
		next: {
			value: 3,
			next: {
				value: 4,
				next: null,
			},
		},
	},
}

function printReverseList(list) {
	if (list.next) {
		printReverseList(list.next)
	}

	alert(list.value)
}

printReverseList(list)

// С использованием цикла

let list_ = {
	value: 1,
	next: {
		value: 2,
		next: {
			value: 3,
			next: {
				value: 4,
				next: null,
			},
		},
	},
}

function printReverseList(list) {
	let arr = []
	let tmp = list

	while (tmp) {
		arr.push(tmp.value)
		tmp = tmp.next
	}

	for (let i = arr.length - 1; i >= 0; i--) {
		alert(arr[i])
	}
}

printReverseList(list_)
