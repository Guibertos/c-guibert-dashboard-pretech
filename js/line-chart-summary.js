new Chart(document.getElementById("line-chart"), {
  type: 'line',
  data: {
    labels: [1500,1600,1700,1750,1800,1850,1900,1950,1999,2050],
    datasets: [{ 
        data: [86,114,106,106,107,111,133,221,783,2478],
        label: "In Store",
        borderColor: "#F0BC5E",
        fill: false
      }, { 
        data: [282,350,411,502,635,809,947,1402,3700,5267],
        label: "Online",
        borderColor: "#FFE8AE",
        fill: false
      }
    ]
  },
  options: {
    title: {
      display: true,
      text: 'Channels Total Sales'
    },
    layout: {
      padding: {
        left: 50,
        right: 50
      }
    }
  }
});


