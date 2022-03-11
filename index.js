
function addElem() {
   const paragrafo = document.createElement("p");
   paragrafo.innerHTML = "contenuto nel paragrafo";

   document.getElementById('container').appendChild(paragrafo);

};

function clonaElem() {
    const nodo = document.getElementById('lista').lastChild;
    const clona = nodo.cloneNode(true);
    const spazio = <br />;
    document.getElementById("tab").appendChild(clona).appendChild(spazio);
}


