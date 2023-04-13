function loadRemoteData(url, callback){
    fetch(url)
    .then((resposta) => resposta.json())
    .then((jsonData) =>{
        callback(jsonData);
    });
}

function loadProducts(){
    document.querySelector("#itensCadastrados").innerHTML = ""
    loadRemoteData("./produtos_cadastrados.json",createProducts)
}

function createProducts(){
    fetch("./produtos_cadastrados.json")
    .then((res) => res.json())
    .catch((e) =>console.log({e}, e.message))
    .then((jsonData)=> {
        console.log(jsonData)
        jsonData.map((item) =>{
            document.getElementById("itensCadastrados").innerHTML += createItemElement(item.nome, item.marca, item.img, item.preco)
        })
    })
}

function createItemElement(itemName, itemMarca, itemImg, itemPreco){
    return `
    
        
            <div class="col">
            <div class="card" style="width: 18rem;">
            <img src="${itemImg}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${itemName}</h5>
              <p class="card-text">${itemMarca}</p>
              <p class="card-text">R$ ${itemPreco}</p>
              <a href="#" class="btn btn-primary">Comprar agora!</a>
            </div>
            </div>  
            </div>
    
    `
}

loadProducts()