function TrouverTop(users, total) {
  let valide = [];
  for (let i = 0; i < users.length; i++) {
    let utilisateur = users[i];
    let somme = 0;

    for (let j = 0; j < utilisateur.total.length; j++) {
      if (utilisateur.total[j] >= total) {
        somme += utilisateur.total[j];
      }
    }
    if (somme > 0) {
      valide.push({ n: utilisateur.n, t: somme });
    }
  }
  valide.sort(function(a, b) {
    return b.totalscore - a.totalscore;

  });
  let top = valide[0] ? valide[0].n : null;
  console.log("Top:", top);
}
