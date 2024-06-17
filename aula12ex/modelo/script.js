function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()      
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //BOM DIA!
        img.src = '/aula12ex/ex014/image/fotomanha.png'
        document.body.style.background = '#E2CD9F'
    } else if (hora >= 12 && hora < 18) {
        //BOA TARDE!
        img.src = '/aula12ex/ex014/image/fototarde.png'
        document.body.style.background = '#B9846F'
    } else {
        //BOA NOITE!
        img.src = '/aula12ex/ex014/image/fotonoite.png'
        document.body.style.background = '#515154'
    }
}

