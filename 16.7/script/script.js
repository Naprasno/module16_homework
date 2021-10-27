const btn = document.querySelector('.j-btn');
const resultNode = document.querySelector('.j-result');

btn.addEventListener('click', () => {
  // Делаем запрос за данными
  fetch('https://jsonplaceholder.typicode.com/users/3/todos')
    .then((response) => {
      // Объект ответа на запрос
      //console.log('response', response);
      // Превращаем объект в JSON. Мы не можем его сразу прочитать,
      // надо отдать в следующий then
      const result = response.json();
      //console.log('result', result);
      return result;
    })
    .then((data) => {
    let allData = data
    let tasks = '';
    let value = document.getElementById("select").value;

        for (let i = 0; i < allData.length; i++) {
        if(allData[i].userId == value) {
            if(allData[i].completed == true) {
                taskBlock = `<li>Задача ${allData[i].id}: <span class=complete>${allData[i].title}</span></li>`
            }
            else{
                taskBlock = `<li>Задача ${allData[i].id}: ${allData[i].title}</li>`
            }
        tasks = tasks + taskBlock;
        resultNode.innerHTML = tasks

        } else {
            alert('Пользователь с указанным id не найден');
            break;
        };
    }
    
    })

    .catch(() => { console.log('error') });
  
});


