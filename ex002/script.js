function fechar(div) {
   document.getElementById(div).style.display = "none"
}
function logar() {
   let login = document.getElementById("login").value 
   let senha = document.getElementById("senha").value
   if (login == "admin" && senha == "admin") {
      fechar('popup')
      alert("Bem vindo novamente Admin!")
   }
   else {
      document.getElementById("msg").style.display = "block"
   }
}
function aument(idv) {
   document.getElementById("d").style.display = "block"
   document.getElementById("imagem_grande").src = idv
}