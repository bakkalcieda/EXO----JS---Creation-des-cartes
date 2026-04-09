function creerCarte() {
    const nom = document.querySelector("#nom").value
    const age = document.querySelector("#age").value
    const url = document.querySelector('#url').value
//si un des champs est vide on arrête tout et on affiche une alerte
    if (!nom || !age || !url) {
        alert ("Remplis tous les champs!" )
        return  // return = ca stop la fonction si les champs sont pas remplis!!!!!!!!!
    }
    // je créee une nouvelle div pour la carte
    const carte = document.createElement("div")
    //j'ajoute la classe carte pour que le css s'applique dessus
    carte.classList.add("carte")
    // je met le contenu dans la carte avec limage le nom et l'age
    // les ${ } ca permet de mettre les variables dans le texte
    carte.innerHTML = `<img src ="${url}" alt="${nom}"> 
        <h2>${nom}<h2>
        <p>${age} ans</p>`
// j'ajoute la carte dans la zone des cartes sur la page
document.querySelector("#cartes").appendChild(carte)

    // je vide les champs apres avoir crée la carte
    // comme ca l'utilisateur peut en creer une autre direct
    document.querySelector("#nom").value = ""
    document.querySelector("#age").value = ""
    document.querySelector("#url").value = ""
}

