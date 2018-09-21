new Chart(document.getElementById("mixed-chart"), {
    type: 'bar',
    data: {
      labels: ["Joey Tribbiani", "Ross Geller", "Phoebe Buffay"],
      datasets: [{
          label: "Decaf Ground Coffee Beans",
          type: "line",
          borderColor: "#F0BC5E",
          data: [408,547,675],
          fill: false
        }, {
          label: "Organic Ground Coffee Beans",
          type: "line",
          borderColor: "#FFE8AE",
          data: [133,221,783],
          fill: false
        }, {
          label: "Decaf Ground Coffee Beans",
          type: "bar",
          backgroundColor: "rgba(0,0,0,0.2)",
          data: [408,547,675,734],
        }, {
          label: "Organic Ground Coffee Beans",
          type: "bar",
          backgroundColor: "rgba(0,0,0,0.2)",
          backgroundColorHover: "#3e95cd",
          data: [133,221,783,2478]
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: 'Total sales (%) Decaf & Organic'
      },
      legend: { display: false },
      layout: {
        padding: {
          left: 50,
          right: 50
        }
      }
    }
});