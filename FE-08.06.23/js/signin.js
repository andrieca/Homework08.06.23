// Обработать ошибки страницы регистрации в случае если сервер отвечает статсус 400 =>signup.js


function signIn(event){
 event.preventDefault();
 let data = {
    "username": document.getElementById("login").value,
    "password": document.getElementById("password").value,
  
 }
 fetch("http://65.109.13.139:9191/signin", {
  "headers": {
    "content-type": "application/json",
  },
  "body": JSON.stringify(data),
  "method": "POST",
})
.then(respons => {
    return respons.json()
})
.then((result) => {
    console.log(result)
    localStorage.setItem('token', result.token)
})
};
