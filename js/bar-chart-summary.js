new Chart(document.getElementById("bar-chart"), {
  type: 'bar',  
  data: {
    labels: ["May", "June", "July", "August", "September"],
    datasets: [
      {
        label: "Total sales",
        backgroundColor: ["#FFFFFF", "#FFFFFF","#FFFFFF","#666666","#FFFFFF"],
        data: [2478,5267,734,784,433]
      }
    ]
  },
  options: {
    legend: { display: false },
    title: {
      display: true,
      text: 'Total sales statistics for the last month (August)'
    },
    layout: {      
      padding: {
        left: 50
      }
    }
  }
});