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

document.getElementById("Capitu").addEventListener("click", function() {
    fetch("Capitu.html")
        .then(response => response.text())
        .then(data => {
            document.querySelector("main").innerHTML = data;
        })
        .catch(error => console.error('Erro ao carregar o conteúdo:', error));
});

