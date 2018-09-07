// La variable i qui prend 0 ou 1, 0= la tailee initiale du texte et 1= la taille agrandi du texte
var i = 0;
// La fonction qui redimensionne le texte
function Agrandi_police_texte()
{
    var texte = document.querySelector('#texte');
    if(i == 0)// Si le texte est à la police initiale
    {
        texte.style.fontSize = '20px';//On agrandi le texte au click
        i = 1; //Le texte se met a la police agrandit
    }
    else
    {
        texte.style.fontSize = "15px";//On e reduit la police du texte au click
        i = 0;//retour à la police initiale
    }
}