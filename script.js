var intervald = window.setInterval(() => {carregar()
        
},1000);


function carregar() {

    var msg = window.document.getElementById('msg')
    var text = window.document.getElementById('msg2')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    var segundo = data.getSeconds()
    
   
    msg.innerHTML = `Agora são ${hora}:${minuto}:${segundo}`
    if(hora >= 00 && hora < 11){
        //bom dia

        img.src = './.imagens/foto-manha.png'
        document.body.style.backgroundColor = '#897c9a'
        text.innerHTML = ` Tenha um bom dia !! <br/> <strong>anime-se pois ninguém fará nada para vc se você ficar ai</strong>`
    }else if(hora >= 12 && hora < 18){
        //boa tarde

        img.src = './.imagens/foto-tarde.png'
        document.body.style.backgroundColor = '#4e2854'
        text.innerHTML = `Tenha uma boa tarde <br/> <strong>vai dar uma durmida ai vai</strong>`
    }else{
        //boa noite

        img.src = './.imagens/foto-noite.png'
        document.body.style.backgroundColor = '#070d1e'
        text.innerHTML = `Tenha uma boa noite <br/> durma com Deus`
    }

}