let dateNow = (`${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()} ${new Date().getDate()}.${new Date().getMonth()}.${new Date().getFullYear()}`)

if(localStorage["username"]==undefined || localStorage["username"]==0 || localStorage["username"]==null || localStorage["username"]==false || localStorage["username"]=='') {
let username = prompt('Добро пожаловать! Назовите, пожалуйста, ваше имя');
  localStorage.setItem("username", username) 
  localStorage.setItem("dateNow", dateNow) 
  alert(`${username}, Мы Вас запомнили!`)
} else {
  alert(`Добрый день, ${localStorage.getItem("username")}! Давно не виделись. В последний раз вы были у нас ${localStorage.getItem("dateNow")}`)
  localStorage.setItem("dateNow", dateNow)
};

//localStorage.clear()