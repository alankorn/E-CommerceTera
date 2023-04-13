
function loadRemoteData(url, callback){
    fetch(url)
    .then((resposta) => resposta.json())
    .then((jsonData) =>{
        callback(jsonData);
    });
}

function loadProducts(){
    document.querySelector("#itensMaisVendidos").innerHTML = ""
    loadRemoteData("./produtosmaisvendidos.json",createProducts)
}

function createProducts(){
    fetch("./produtosmaisvendidos.json")
    .then((res) => res.json())
    .catch((e) =>console.log({e}, e.message))
    .then((jsonData)=> {
        console.log(jsonData)
        jsonData.map((item) =>{
            document.getElementById("itensMaisVendidos").innerHTML += createItemElement(item.nome, item.marca, item.img)
        })
    })
}

function createItemElement(itemName, itemMarca, itemImg){
    return `
    
        
            <div class="col">
            <div class="card" style="width: 18rem; background-color:#5166A8;">
            <img src="${itemImg}" class="card-img-top" alt="...">
            <div class="card-body">
              <h4 class="card-title" style="color: white;">${itemName}</h5>
              <p class="card-text" style="color: white;">${itemMarca}</p>
              <a href="#" class="btn btn-primary visitaProd" >Visitar produto</a>
            </div>
            </div>  
            </div>
    
    `
}

loadProducts()
