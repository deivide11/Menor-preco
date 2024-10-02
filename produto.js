 var produtos = [];

for(var i = 0; i < 3; i++){
    var item = prompt("Qual o produto desejado?");
    var valor = parseFloat(prompt("Qual o preço do item?"));

    var itemBarato = {
        itens: item,
        valorItem: valor
    };

    produtos.push(itemBarato);
}

var menorPreco = produtos[0].valorItem; // Somando a variavel (menorPreco) com o primeiro produto da lista
for (var i = 0; i < produtos.length; i++){
    if(produtos[i].valorItem < menorPreco){ // Se o valor do produto for melhor que menorPreco
        menorPreco = produtos[i].valorItem; // Então menorPreco vai ser igual ao valorItem
    }
}
console.log("Esse é o menor preço: ", menorPreco); // ai só exibir o menorPreco aqui
