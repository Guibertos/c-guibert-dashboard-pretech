new Chart(document.getElementById("doughnut-chart"), {
    type: 'doughnut',
    data: {
      labels: ["Joey Tribbiani", "Ross Geller", "Phoebe Buffay"],
      datasets: [
        {
          label: "Total sales",
          backgroundColor: ["#666666","#FFE8AE","#F0BC5E"],
          data: [3478,1267,5255]
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: 'Total sales of each sales assistant this month (August)'
      }
    }
});
