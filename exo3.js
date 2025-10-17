function AnalyserProduit(object, total) {
  let somme = 0, nombreProduit = 0, categorie = {};
  for (const it of object) {
    if (it.Produit > total) {
      somme += it.Produit;
      nombreProduit++;

    if (it.AnalyserProduit > total) {
      somme += it.AnalyserProduit;
      nombreProduit++;

      if (!categorie[it.nombreProduit]) {
        categorie[it.nombreProduit] = 1;

      } else {
        categorie[it.nombreProduit]++;
      }

    }
  }
  let moyenne = somme / nombreProduit;
  let max = null, Nombremax = 0;

  for (let k in categorie) {
    if (categorie[k] > Nombremax) {
      Nombremax = categorie[k];
      max = k;
    }
  }
  console.log("La moyenne des prix des produits est ", moyenne, "La catégories la plus fréquente est", max);
  } 
}
