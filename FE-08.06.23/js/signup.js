// Обработать ошибки страницы регистрации в случае если сервер отвечает статсус 400



  function singUp(event){
    event.preventDefault();
    let data = {
      "username": document.getElementById("username").value,
      "password": document.getElementById("password").value,
      "confirm_password": document.getElementById("confirm_password").value,
    }
      fetch("http://65.109.13.139:9191/signup", {
    "headers": {
      "content-type": "application/json",
    },
  
    "body": JSON.stringify(data),
    "method": "POST",
  })

  .then(respons => {
    if(respons.status == 400){
    throw new Error ("Проверте данние ввода!");
    }else{
      return respons.json();
    }

  })
  .then((data) => {
  console.log(data)
  localStorage.setItem("id", data.id)
  localStorage.setItem("jwt", data.jwt)})
  .catch((error) => {
    console.log('Error: ' + error.message);
  });
} 
