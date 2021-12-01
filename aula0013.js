window.alert('Ganhe 5% de desconto nas compras à partir de R$500,00')

function somar () {
    var v1 = window.document.getElementById('gasto')
    var res = window.document.getElementById('res')
    var valor1 = Number(v1.value)
    var desconto = ''
    r = ''
    

    res.innerHTML = `Você comprou o valor total de R$ ${valor1},00 recebeu desconto de R$ ${desconto},00 e o total deu R$${r},00 !`
    
    if (valor1 == 0 && valor1 < 499) {
        desconto = valor1 * 0.00
        r = valor1 - (valor1 * 0.00)
        res.innerHTML = `Você comprou o valor total de R$ ${valor1},00 recebeu desconto de R$ ${desconto},00 e o total deu R$${r},00 `

    } else if (valor1 >= 500 && valor1 < 999) {

        desconto = valor1 * 0.05
        r = valor1 - (valor1 * 0.05)
        res.innerHTML = `Você comprou o valor total de R$ ${valor1},00 recebeu desconto de R$ ${desconto},00 e o total deu R$${r},00! `
    } 
    else if (valor1 >= 1000 && valor1 < 1499) {

        desconto = valor1 * 0.10
        r = valor1 - (valor1 * 0.10)
        res.innerHTML = `Você comprou o valor total de R$ ${valor1},00 recebeu desconto de R$ ${desconto},00 e o total deu R$${r},00! `
    } 
    else if (valor1 >= 1500 && valor1 < 2499) {

        desconto = valor1 * 0.15
        r = valor1 - (valor1 * 0.15)
        res.innerHTML = `Você comprou o valor total de R$ ${valor1},00 recebeu desconto de R$ ${desconto},00 e o total deu R$${r},00! `
    } 
    else if (valor1 >= 2500 && valor1 < 3499) {

        desconto = valor1 * 0.20
        r = valor1 - (valor1 * 0.20)
        res.innerHTML = `Você comprou o valor total de R$ ${valor1},00 recebeu desconto de R$ ${desconto},00 e o total deu R$${r},00! `
    }
    else if (valor1 >= 3500 && valor1 < 4999) {

        desconto = valor1 * 0.25
        r = valor1 - (valor1 * 0.25)
        res.innerHTML = `Você comprou o valor total de R$ ${valor1},00 recebeu desconto de R$ ${desconto},00 e o total deu R$${r},00! `
    }  else if (valor1 >= 5000) {

        desconto = valor1 * 0.30
        r = valor1 - (valor1 * 0.30)
        res.innerHTML = `Você comprou o valor total de R$ ${valor1},00 recebeu desconto de R$ ${desconto},00 e o total deu R$${r},00! `
    }
}