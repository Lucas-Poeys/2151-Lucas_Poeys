function fechar() {
   document.getElementById("popup").style.display = "none"
}

function logar() {
   let login = document.getElementById("login").value 
   let senha = document.getElementById("senha").value
   if (login == "admin" && senha == "admin") {
      fechar()
      alert("Bem vindo novamente Admin!")
   }
   else {
      document.getElementById("msg").style.display = "block"
   }
}