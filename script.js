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
         inserirIMG(elemento.download_url, elemento.author);
    });
}

function estilizarMural() {
    body.className = "bg-amber-50 text-slate-900 flex items-center justify-center transition-colors duration-300 min-h-screen";
    main.classList.add("columns-3", "gap-5", "*:mt-5", "pt-20" );

}
estilizarMural();


function inserirIMG(url, author) {
    // cria o container para img e autor
    let container = document.createElement('div');
    container.className = 'mb-4';
    
    // cria o elemento img
    let img = document.createElement('img');
    img.src = url;
    img.className = 'w-full rounded-lg shadow-md';
    container.appendChild(img);
    
    // cria o elemento p para o autor
    let authorP = document.createElement('p');
    authorP.textContent = author;
    authorP.className = 'text-center mt-2 text-sm font-medium';
    container.appendChild(authorP);
    
    main.appendChild(container);
}

// Criar botão de toggle de tema
const themeToggle = document.createElement('button');
themeToggle.className = 'absolute top-8 right-8 w-[40px] h-[40px] rounded-full bg-white shadow-md flex items-center justify-center transition-colors duration-300 hover:bg-slate-100 z-10';
const themeIcon = document.createElement('img');
themeIcon.src = './moon-regular-full.svg';
themeIcon.alt = 'Alternar tema';
themeIcon.className = 'w-6 h-6';
themeToggle.appendChild(themeIcon);
body.appendChild(themeToggle);

// Função para alternar tema
let isDark = false;
themeToggle.addEventListener('click', () => {
    isDark = !isDark;
    if (isDark) {
        body.classList.remove('bg-amber-50', 'text-slate-900');
        body.classList.add('bg-slate-900', 'text-white');
        themeIcon.src = './moon-solid-full.svg';
    } else {
        body.classList.remove('bg-slate-900', 'text-white');
        body.classList.add('bg-amber-50', 'text-slate-900');
        themeIcon.src = './moon-regular-full.svg';
    }
});
