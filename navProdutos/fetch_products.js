let produtos = [
    {
        "nome_produto": "Camiseta Masculina Barbie"
        , "tipos": [
            {
                "tamanho": "G"
                , "quantidade_produto": 8
                , "preco": 139.99
                , "marca": "Puma"
                , "frete": 15.0
            },
            {
                "tamanho": "M"
                , "quantidade_produto": 10
                , "preco": 129.99
                , "marca": "Puma"
                , "frete": 15.0
            },
            {
                "tamanho": "P"
                , "quantidade_produto": 30
                , "preco": 119.99
                , "marca": "Puma"
                , "frete": 15.0
            }
        ]
    },
    {
        "nome_produto": "Vestido Masculino John Wick"
        , "tipos": [
            {
                "tamanho": "G"
                , "quantidade_produto": 3
                , "preco": 199.99
                , "marca": "Nike"
                , "frete": 10.0
            },
            {
                "tamanho": "M"
                , "quantidade_produto": 5
                , "preco": 189.99
                , "marca": "Nike"
                , "frete": 10.0
            },
            {
                "tamanho": "P"
                , "quantidade_produto": 30
                , "preco": 179.99
                , "marca": "Nike"
                , "frete": 10.0
            }
        ]
    },
    {
        "nome_produto": "Shorts Feminino Formiga Atômica"
        , "tipos": [
            {
                "tamanho": "G"
                , "quantidade_produto": 9
                , "preco": 99.99
                , "marca": "Adidas"
                , "frete": 10.0
            },
            {
                "tamanho": "M"
                , "quantidade_produto": 18
                , "preco": 89.99
                , "marca": "Adidas"
                , "frete": 10.0
            },
            {
                "tamanho": "P"
                , "quantidade_produto": 27
                , "preco": 79.99
                , "marca": "Adidas"
                , "frete": 10.0
            }
        ]
    },
    {
        "nome_produto": "Moletom Feminino Goku"
        , "tipos": [
            {
                "tamanho": "G"
                , "quantidade_produto": 3
                , "preco": 199.99
                , "marca": "Kelme"
                , "frete": 10.0
            },
            {
                "tamanho": "M"
                , "quantidade_produto": 5
                , "preco": 189.99
                , "marca": "Kelme"
                , "frete": 10.0
            },
            {
                "tamanho": "P"
                , "quantidade_produto": 30
                , "preco": 179.99
                , "marca": "Kelme"
                , "frete": 10.0
            }
        ]
    },
    {
        "nome_produto": "Shorts Masculino Kauã Reymond"
        , "tipos": [
            {
                "tamanho": "G"
                , "quantidade_produto": 6
                , "preco": 299.99
                , "marca": "Globo"
                , "frete": 11.0
            },
            {
                "tamanho": "M"
                , "quantidade_produto": 15
                , "preco": 289.99
                , "marca": "Globo"
                , "frete": 11.0
            },
            {
                "tamanho": "P"
                , "quantidade_produto": 17
                , "preco": 279.99
                , "marca": "Globo"
                , "frete": 11.0
            }
        ]
    }
]

var gridProdutos = document.getElementById("gridProdutos")

var cardContainer = document.createElement('div')
cardContainer.className = 'row row-cols-4'

for (i = 0; i < produtos.length; i++) {

    let card = document.createElement('div')
    card.className = 'card shadow cursor-pointer row row-cols-4'

    let cardBody = document.createElement('div')
    cardBody.className = 'card-body'

    let title = document.createElement('h3')
    title.innerText = produtos[i].nome_produto;
    title.className = 'card-title'

    let price = document.createElement('p')
    price.innerText = "Preço: R$" + produtos[i].tipos[0].preco
    price.className = 'card-title'

    let tamanho = document.createElement('p')
    tamanho.innerText = "Tamanho: " + produtos[i].tipos[0].tamanho
    tamanho.className = 'card-title'

    console.log(price.innerHTML)

    // let color = document.createElement('div')
    // color.innerText = "tes tes tes tes tes"
    // color.className = 'card-color'

    cardBody.appendChild(title)
    cardBody.appendChild(price)
    cardBody.appendChild(tamanho)
    // cardBody.appendChild(color)
    
    card.appendChild(cardBody)
    
    console.log(card.innerHTML)

    cardContainer.appendChild(card)

}

gridProdutos.appendChild(cardContainer)