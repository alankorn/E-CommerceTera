let users = [];

function criaUser() {
  var name = document.querySelector("#inputNome").value;
  var lastName = document.querySelector("#inputSobrenome").value;
  var cpf = document.querySelector("#inputCPF").value;
  var email = document.querySelector("#inputEmailCadastro").value;
  var password = document.querySelector("#senhaCadastroInput").value;
  var passwordConfirm = document.querySelector(
    "#senhaConfirmacaoCadastroInput"
  ).value;
  var cep = document.querySelector("#inputCEP").value;
  var rua = document.querySelector("#inputRua").value;
  var bairro = document.querySelector("#inputBairro").value;
  var numero = document.querySelector("#inputNumero").value;
  var complemento = document.querySelector("#inputComplement").value;

  var newUser = new Object();
  newUser.nameUser = name;
  newUser.lastNameUser = lastName;
  newUser.cpfUser = cpf;
  newUser.emailUser = email;
  newUser.cepUser = cep;
  newUser.ruaUser = rua;
  newUser.bairroUser = bairro;
  newUser.numeroUser = numero;
  newUser.complementoUser = complemento;

  if (password == passwordConfirm) {
    newUser.userPassword = password;
    users.push(newUser);
    console.log(users);
  } else {
    document.querySelector("#senha_nao_corresponde").innerHTML =
      "Senha não corresponde";
  }
}
