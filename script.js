//Crie a variável produtos
const produtos = [
                {
                    name: "Produto 1",
                    price: 450.0,
                    quality: 3,
                    status: true
                },
                {
                    name: "Produto 2",
                    price: 950.0,
                    quality: 8,
                    status: true
                },
                {
                    name: "Produto 3",
                    price: 350.0,
                    quality: 2,
                    status: false
                },
                {
                    name: "Produto 4",
                    price: 1800.0,
                    quality: 10,
                    status: true
                },
                {
                    name: "Produto 5",
                    price: 750.0,
                    quality: 7,
                    status: true
                },
                {
                    name: "Produto 6",
                    price: 600.0,
                    quality: 6,
                    status: false
                }
            ]


var miniCartDisplay = []; // MiniCart é um array vazio aonde irei adicionar os itens do carrinho
var finalPrice = 0; // Preço final inicia em 0 e vai ser somado conforme as condições abaixo.
var index = 0;
function itemMiniCart(name, price, qualidade, status) {
    this.NomeDoProduto = name;
    this.PreçoDoProduto = price;
    this.QualidadeDoProduto = qualidade;
    this.status = status;
}
produtos.forEach(function (arrayItem) {  // Usei um ForEach para percorrer o array
    if(arrayItem.status == 1 && arrayItem.price > 482 && arrayItem.price < 1600 && arrayItem.quality > 6){ // Condições dada no exercicio
        ++index
        miniCartDisplay[index] = new itemMiniCart(arrayItem["name"], arrayItem["price"], arrayItem["quality"], (arrayItem["status"]));
        finalPrice = finalPrice + arrayItem["price"];
    }
});

console.table(miniCartDisplay);
console.log("O valor final somando todos itens do carrinho é: R$" + finalPrice); // Mostrei o preço final

