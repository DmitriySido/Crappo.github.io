let canvasSecond = document.querySelector('#myChart-2').getContext('2d');

let chart = new Chart(canvasSecond, {
  type: 'bar',

  data: {
    labels: ["May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
    datasets: [{
      label: "BTC",
      backgroundColor: ['rgba(74, 169, 230, 0.3)'],
      borderColor: "#6EDCB5",
      borderWidth: 2,
      data: [1439.33,1275.05,1430.44,1769.65,1452.86,1234.46,1152.54, 1245,11],
    }]
  },

});