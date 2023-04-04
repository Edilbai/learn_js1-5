// Перепишите, используя async/await

// Перепишите один из примеров раздела Цепочка промисов, используя async/await вместо .then/catch:

// function loadJson(url) {
// return fetch(url)
// .then(response => {
// if (response.status == 200) {
// return response.json();
// } else {
// throw new Error(response.status);
// }
// })
// }

// loadJson('no-such-user.json') // (3)
// .catch(alert); // Error: 404
// решение:

async function loadJson(url) {
	// (1)
	let response = await fetch(url) // (2)

	if (response.status == 200) {
		let json = await response.json() // (3)
		return json
	}

	throw new Error(response.status)
}

loadJson('no-such-user.json').catch(alert)
