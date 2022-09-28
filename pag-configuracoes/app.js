function dark() {
    var dark = window.document.getElementById("btndark")
    var div = window.document.getElementById("title")

    document.body.style.backgroundColor = "#050505"
    document.body.style.color = "FFFFFF"
    div.setAttribute("id", "title2")
     
}

function normal() {
    var dark = window.document.getElementById("btnnormaldark")
    var div = window.document.getElementById("title2")

    document.body.style.backgroundColor = ""
    document.body.style.color = ""
    div.setAttribute("id", "title")
     
}