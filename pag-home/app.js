function exit (){
    var exit = window.document.getElementsByClassName("exit")
    exit.onclick = confirm ("Tem certeza que deseja sair?")
    if (exit.onclick == true) {
        window.open("../pag-index/index.html", '_self')
    } else {
        
    }
}

