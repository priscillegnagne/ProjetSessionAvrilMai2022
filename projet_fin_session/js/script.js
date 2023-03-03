/*Contenu*/
function ouvreContenu(nomContenu){
    var i;
    var afficher = document.getElementsByClassName("contenu");
    for (i = 0; i < afficher.length; i++){
        afficher[i].style.display = "none";
    }
    document.getElementById(nomContenu).style.display = "block";
    }
