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

// Ищем ноду для вставки результата запроса
const resultNode = document.querySelector('.j-result');
// Ищем кнопку, по нажатии на которую будет запрос
const btnNode = document.querySelector('.j-btn-request');

function displayResult(apiData) {
    let cards = '';
    console.log(apiData);
    //console.log(apiData.length);
    let select = document.getElementById("select");
    let value = select.value;

    
    for (let i = 0; i < apiData.length; i++) {
          /*  console.log(apiData[i].year);
            console.log(value.includes(apiData[i].year));*/

        if(apiData[i].year == value) {
        
                const cardBlock = `
                <table>
                    <tr>
                        <td>1 кв.</td>
                        <td>2 кв.</td>
                        <td>3 кв.</td> 
                        <td>4 кв.</td>        
                    </tr>
                    <tr>
                        <td>${apiData[i].sales.q1}</td>
                        <td>${apiData[i].sales.q2}</td>
                        <td>${apiData[i].sales.q3}</td>
                        <td>${apiData[i].sales.q4}</td>
                    </tr>
                </table>
                
                <a href="https://quickchart.io/chart?c={type:'bar',data:{labels:['1 кв.', '2 кв.', '3 кв.', '4 кв.'],datasets:[{label:'Выручка за год',data:[${apiData[i].sales.q1},${apiData[i].sales.q2},${apiData[i].sales.q3},${apiData[i].sales.q4}]}]}}" target="_blank" onclick="window.open(this.href,this.target,'width=900,height=700,scrollbars=1');return false;">Открыть график</a>
                    `;

                cards = cards + cardBlock;
                resultNode.innerHTML = cards;
                let aHref=``;
                console.log(aHref)
                       
        } else {
                //alert('Неверный год');
        };
    }
}



  
  // Вешаем обработчик на кнопку для запроса
  btnNode.addEventListener('click', () => {
    useRequest('https://my.api.mockaroo.com/revenue_2017-2019.json?key=fd36b440', displayResult); 
  })


