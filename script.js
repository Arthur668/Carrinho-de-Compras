let produtos = document.querySelector('#produtos')
let botao = document.querySelector('#comprar')

botao.addEventListener('click', comprar)
function comprar(){
    let compra = "produto comprado\n"
    if (produtos.value == "Hamburger simples"){
        compra += "produto:" + produtos.value + ", valor: R$35,00"
    }else if (produtos.value == "Hamburger Duplo"){
        compra += "produto:" + produtos.value + ", valor: R$45,00"
    }else if (produtos.value == "Hamburger Duplo com Bacon"){
        compra += "produto:" + produtos.value + ", valor: R$50,00"
    }else{
        compra += "produto nao selecionado"
    }
    alert(compra)    
}