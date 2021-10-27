
// Создаем promise
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    let randNum = Math.floor(Math.random() * 100) + 1
    if (randNum%2 == 0) {
      resolve("Успешное выполнение promise");
    } else {
      reject("Неуспешное выполнение promise");
    }
  }, 3000);
});


// Выполняем promise
myPromise
  .then((result) => {
    console.log(`Завершено успешно. Сгенерированное число — ${randNum}`);
  })
  .catch((error) => {
    console.log(`Завершено с ошибкой. Сгенерированное число — ${randNum}`);
  })
  .finally(() => {
    //console.log('Выполняется всегда');
  });