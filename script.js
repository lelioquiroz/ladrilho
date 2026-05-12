const url = `https://picsum.photos/v2/list`;
const body = document.querySelector('body');
const main = document.querySelector('main');
// CRIAÇÃO DE FUNÇÃO PARA BUSCAR DADOS DA URL
async function getDados(url) {

    const dados = await (await fetch(url)).json();
   // console.table(dados);
   filtrarDados(dados);
}

getDados(url);
function filtrarDados(dados)
 {
    const urlIMG = dados.forEach((elemento) => {
       console.log(elemento.url);
         inserirIMG(elemento.download_url);
    });
}

function estilizarMural() {
    body.className = "flex items-center justify-center";
    main.classList.add("columns-3", "gap-5", "*:mt-5");

}
estilizarMural();


function inserirIMG(url) {
    // cria o elemento img
    let img = document.createElement('img')
//adiciona o valor da url recebida dentro da propriedade src (source)
    img.src = url
main.appendChild(img);
} 
