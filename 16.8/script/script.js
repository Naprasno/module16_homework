const btn = document.querySelector('.j-btn');

function useRequest(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    
    xhr.onload = function() {
      if (xhr.status != 200) {
        console.log('Статус ответа: ', xhr.status);
      } else {
        const result = JSON.parse(xhr.response);
        if (callback) {
          callback(result);
        }
      }
    };
    
    xhr.onerror = function() {
      console.log('Ошибка! Статус ответа: ', xhr.status);
    };
    
    xhr.send();
};
const resultNode = document.querySelector('.j-result');

function displayResult(apiData) {
    let cards = '';
    
    apiData.forEach(item => {
      const cardBlock = `
        <div class="card">
          <img
            src="${item.download_url}"
            class="card-image"
          />
          <p>${item.author}</p>
        </div>
      `;
      cards = cards + cardBlock;
    });
        
    resultNode.innerHTML = cards;
  }

btn.addEventListener('click', () => {
let selectPage = document.getElementById("selectPage").value;
let selectLimit = document.getElementById("selectLimit").value;
// Создаем promise
const myPromise = new Promise((resolve, reject) => {
  if ((selectPage >= 1 && selectPage <=10) || (selectLimit >= 1 && selectLimit <=10)) {
    resolve({

      });
  } else {
    reject({
      message: "Номер страницы и лимит вне диапазона от 1 до 10"
    });
  }
});

myPromise
  .then((result) => {
    return new Promise((resolve, reject) => {
      if (selectLimit >= 1 && selectLimit <=10) {
        resolve({
          
        });
      } else {
        reject({
          message: "Лимит вне диапазона от 1 до 10"
        });
      }
    });
  })
  .then((result) => {
    return new Promise((resolve, reject) => {
      if (selectPage >= 1 && selectPage <=10) {
        resolve({
          
        });
      } else {
        reject({
          message: "Номер страницы вне диапазона от 1 до 10"
        });
      }
    });
  })

  .then((result) => {
    //console.log(selectPage,selectLimit );
    useUrl=`https://picsum.photos/v2/list?page=${selectPage}&limit=${selectLimit}` ;
    localStorage.setItem("selectPage", selectPage) ;
    localStorage.setItem("selectLimit", selectLimit) ;
    console.log('localStorage:',localStorage.getItem("selectPage"),localStorage.getItem("selectLimit")  );
  })
 .catch((error) => {
    alert(error.message);
  })
});


btn.addEventListener('click', () => {
    useRequest(useUrl, displayResult);
  })

 
    if(localStorage["selectPage"]==undefined || localStorage["selectPage"]==0 || localStorage["selectPage"]==null || localStorage["selectPage"]==false || localStorage["selectPage"]=='') {
        console.log('localStorage пустой, тыкаем кнопку, показываем картинки, записываем значения')
        
        } else {
            useUrl=`https://picsum.photos/v2/list?page=${localStorage.getItem("selectPage")}&limit=${localStorage.getItem("selectLimit")}`
            window.onload = function() {useRequest(useUrl, displayResult);}
            console.log('localStorage не пустой, сразу выполняем показать картинки с предыдущими значениями')
        };
 

 