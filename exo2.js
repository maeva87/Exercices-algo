const players = ["Alice", "Bob", "Charlie", "David", "Eve", "Frank"];

function melange(players) {
	let i, j, element;
	i = players["length"];
	while (i > 1) {
		j = Math.floor(Math.random() * i--);
		[players[i], players[j]] = [players[j], players[i]];
	}
	return players;
}
function genererMatchs(players) {
	let copie = [];
	let i = 0;
	while(i < players.length) {
		copie[i] = players[i];
		i++;
	}

	let melanger = melange(copie);
	let matchs = [];
	let exempt = null;

	if(melanger.length % 2 != 0){
		exempt = melanger[melanger.length - 1];
		melanger.pop();
	}

	let j = 0;
	while(j < melanger.length){
		matchs.push([melanger[j], melanger[j+1]]);
		j = j + 2;
	}

	if(exempt != null){
		matchs.push({exempt: exempt});
	}

	return matchs;
}

console.log(genererMatchs(players));
