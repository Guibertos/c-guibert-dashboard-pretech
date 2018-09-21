var ctx = document.getElementById("myChart4-phoebe").getContext('2d');
var myChart = new Chart(ctx, {
	type: 'bar',
	data: {
		labels: ["May","June","July","August","September"],
		datasets: [{
			label: 'Decaf',
			backgroundColor: "#FFE8AE",
			data: [12, 59, 5, 56, 58,12, 59, 87, 45],
		}, {
			label: 'Organic',
			backgroundColor: "#F0BC5E",
			data: [12, 59, 5, 56, 58,12, 59, 85, 23],
		}],
	},
options: {
    tooltips: {
      displayColors: true,
      callbacks:{
        mode: 'x',
      },
    },
    scales: {
      xAxes: [{
        stacked: true,
        gridLines: {
          display: false,
        }
      }],
      yAxes: [{
        stacked: true,
        ticks: {
          beginAtZero: true,
        },
        type: 'linear',
      }]
    },
		responsive: true,
		maintainAspectRatio: false,
		legend: { position: 'bottom' },
	}
});