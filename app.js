let users = []

function criaUser(){
    var name = document.querySelector("#inputNome").value
    var lastName = document.querySelector("#inputSobrenome").value
    var cpf = document.querySelector("#inputCPF").value
    var email = document.querySelector("#inputEmailCadastro").value
    var password = document.querySelector("#senhaCadastroInput").value
    var passwordConfirm = document.querySelector("#senhaConfirmacaoCadastroInput").value
    
    var newUser = new Object()
    newUser.nameUser = name;
    newUser.lastNameUser = lastName;
    newUser.cpfUser = cpf;
    newUser.emailUser = email;
    if(password == passwordConfirm){
        newUser.userPassword = password
        users.push(newUser)
    }
    else{
        document.querySelector("#senha_nao_corresponde").innerHTML = 'Senha não corresponde'
    }

    
}

