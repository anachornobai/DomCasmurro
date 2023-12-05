var menuIcon = document.getElementById('barra');
var menuMobile = document.querySelector('.menu-mobile');


function fechaMenuMobile(){
    menuIcon.src = 'menu.svg'; 
    menuMobile.style.left = "-100%"
}


function handleMenu(){
    // Se o menu estiver aberto
    if (menuMobile.style.left == "0%" ){
        fechaMenuMobile()
    // Se o menu estiver fechado
    } else {
        menuIcon.src = 'close.svg'; 
        menuMobile.style.left = "0%"
    }

}


function carregaConteudoLivro() {
    fetch("livroAutor.html")
        .then(response => response.text())
        .then(data => {
            document.querySelector("main").innerHTML = data;
            fechaMenuMobile()
        })
        .catch(error => console.error('Erro ao carregar o conteúdo:', error));
}

document.getElementById("livro").addEventListener("click", carregaConteudoLivro);
document.getElementById("livro_Mini").addEventListener("click", carregaConteudoLivro);

function carregaConteudoCapitu() {
    fetch("Capitu.html")
        .then(response => response.text())
        .then(data => {
            document.querySelector("main").innerHTML = data;
            fechaMenuMobile()
        })
        .catch(error => console.error('Erro ao carregar o conteúdo:', error));
}

document.getElementById("Capitu").addEventListener("click", carregaConteudoCapitu);
document.getElementById("Capitu_Mini").addEventListener("click", carregaConteudoCapitu);

function carregaConteudoEscobar() {
    fetch("Escobar.html")
        .then(response => response.text())
        .then(data => {
            document.querySelector("main").innerHTML = data;
            fechaMenuMobile()
        })
        .catch(error => console.error('Erro ao carregar o conteúdo:', error));
}

document.getElementById("Escobar").addEventListener("click", carregaConteudoEscobar);
document.getElementById("Escobar_Mini").addEventListener("click", carregaConteudoEscobar);

function carregaConteudoBentinho() {
    fetch("Bentinho.html")
        .then(response => response.text())
        .then(data => {
            document.querySelector("main").innerHTML = data;
            fechaMenuMobile()
        })
        .catch(error => console.error('Erro ao carregar o conteúdo:', error));
}

document.getElementById("Bentinho").addEventListener("click", carregaConteudoBentinho);
document.getElementById("Bentinho_Mini").addEventListener("click", carregaConteudoBentinho);

function carregaConteudoCosme() {
    fetch("Cosme.html")
        .then(response => response.text())
        .then(data => {
            document.querySelector("main").innerHTML = data;
            fechaMenuMobile()
        })
        .catch(error => console.error('Erro ao carregar o conteúdo:', error));
}

document.getElementById("Cosme").addEventListener("click", carregaConteudoCosme);
document.getElementById("Cosme_Mini").addEventListener("click", carregaConteudoCosme);

function carregaConteudoUTF() {
    fetch("utf.html")
        .then(response => response.text())
        .then(data => {
            document.querySelector("main").innerHTML = data;
            fechaMenuMobile()
        })
        .catch(error => console.error('Erro ao carregar o conteúdo:', error));
}

document.getElementById("UTF").addEventListener("click", carregaConteudoUTF);
document.getElementById("UTF_Mini").addEventListener("click", carregaConteudoUTF);






