/*Сделать кнопку, при нажатии на которую, будет меняться криптовалюта и меняться график.*/




// Получение контекста для рисования
let canvasFirst = document.querySelector('#myChart');
let contextFirst = canvasFirst.getContext('2d');
// Функции
let createLineChart = (xData, yData) => {
      let gradient = contextFirst.createLinearGradient(0, 0, 0, window.screen.width/2);
      gradient.addColorStop(0, 'rgba(74, 169, 230, 0.2)');
      gradient.addColorStop(1, 'rgba(74, 219.3, 244.8, 0.1)');

      let data = {
        labels: xData,
        datasets: [{
          label: 'Bitcoin $',
          data: yData,
          pointStyle: false,
          fill: true,
          backgroundColor: gradient,
          borderWidth: 2,
          borderColor: '#6EDCB5',
          tension: 0.2
        }]
      }

      let xScaleConfig = {
        min: 350,
        max: 400,
        ticks: {
          autoSkip: true,
          maxRotation: 0,
          
          color: 'rgba(74, 169, 230, 0.9)'
        },
        border: {
          color: 'rgba(74, 169, 230, 1)'
        },
        grid: {
          color: 'rgba(74, 169, 230, 0.3)'
        }
      }
      let yScaleConfig = {
        ticks: {
          color: 'rgba(74, 169, 230, 0.9)'
        },
        border: {
          color: 'rgba(74, 169, 230, 1)'
        },
        grid: {
          color: 'rgba(74, 169, 230, 0.3)'
        }
      }

      let zoomOptions = {
        pan: {
          enabled: true,
          mode: 'x',
        },
        zoom:{
          mode: 'x',
          pinch: {
            enabled: true,
          },
          wheel: {
            enabled: true,
          },
        }
      }

      let config = {
        type: 'line',
        data: data,
        options: {
          scales:{
            x: xScaleConfig,
            y: yScaleConfig,
          },
          plugins: {
            legend: {
              display: false
            },
            zoom: zoomOptions,
          },
        }
      }
      let chart = new Chart(contextFirst, config);
    }
// Получение данных с сервера
axios.get('https://www.alphavantage.co/query?function=ALUMINUM&interval=monthly&apikey=demo')
.then((response)=>{
      let data = response.data.data;
      let xData = [];
      let yData = [];
      for(let i = data.length - 1; i > 0; i--){
        if(data[i].value !== '.'){
          xData.push(data[i].date);
          yData.push(data[i].value);
        }
      }
      createLineChart(xData, yData);
    });

// Функции