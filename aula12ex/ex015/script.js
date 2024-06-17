function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        alert('Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = "Homem"
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', '/aula12ex/ex015/image/menino.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', '/aula12ex/ex015/image/homem.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', '/aula12ex/ex015/image/adulto.png')
            } else {
                //idoso
                img.setAttribute('src', '/aula12ex/ex015/image/senhor.png')
            }

        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', '/aula12ex/ex015/image/menina.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', '/aula12ex/ex015/image/mulher.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', '/aula12ex/ex015/image/adulta.png')
            } else {
                //idoso
               img.setAttribute('src', '/aula12ex/ex015/image/senhora.png')
            }
        }
        res.style.textAlign = 'center'        
        res.innerHTML = `Detectamos, ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}
