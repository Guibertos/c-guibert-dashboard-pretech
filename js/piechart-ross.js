new Chart(document.getElementById("doughnut-chart-ross"), {
    type: 'doughnut',
    data: {
      labels: ["Sales", "Target"],
      datasets: [
        {
          label: "Total sales",
          backgroundColor: ["#FFE8AE","#F0BC5E"],
          data: [3478,5255]
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: 'Target & Sales in August'
      }
    }
});
