function handleMenu(){
    var menuIcon = document.getElementById('barra');
    var menuMobile = document.querySelector('.menu-mobile');

    // Se o menu estiver aberto
    if (menuMobile.style.left == "0%" ){
        menuIcon.src = 'menu.svg'; 
        menuMobile.style.left = "-100%"
    // Se o menu estiver fechado
    } else {
        menuIcon.src = 'close.svg'; 
        menuMobile.style.left = "0%"
    }

}
document.getElementById("livro").addEventListener("click", function() {
    fetch("livroAutor.html")
        .then(response => response.text())
        .then(data => {
            document.querySelector("main").innerHTML = data;
        })
        .catch(error => console.error('Erro ao carregar o conteúdo:', error));
});

document.getElementById("Capitu").addEventListener("click", function() {
    fetch("Capitu.html")
        .then(response => response.text())
        .then(data => {
            document.querySelector("main").innerHTML = data;
        })
        .catch(error => console.error('Erro ao carregar o conteúdo:', error));
});

document.getElementById("Escobar").addEventListener("click", function() {
    fetch("Escobar.html")
        .then(response => response.text())
        .then(data => {
            document.querySelector("main").innerHTML = data;
        })
        .catch(error => console.error('Erro ao carregar o conteúdo:', error));
});

document.getElementById("Bentinho").addEventListener("click", function() {
    fetch("Bentinho.html")
        .then(response => response.text())
        .then(data => {
            document.querySelector("main").innerHTML = data;
        })
        .catch(error => console.error('Erro ao carregar o conteúdo:', error));
});

document.getElementById("Cosme").addEventListener("click", function() {
    fetch("Cosme.html")
        .then(response => response.text())
        .then(data => {
            document.querySelector("main").innerHTML = data;
        })
        .catch(error => console.error('Erro ao carregar o conteúdo:', error));
});


document.getElementById("inicio").addEventListener("click", function() {
    window.location.href = "principal.html";
});