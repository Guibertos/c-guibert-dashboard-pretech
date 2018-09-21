var chart = new Chart(
    document.getElementsByClassName('chartjs-stacked-bar-phoebe'),
    {
    type: 'horizontalBar',
    data: {
        labels: [""],
        datasets: [{
            data: [35],
            label:"Decaf",
            stack: "Sales in Decaf & Organic",
            backgroundColor: "#FFE8AE",
            hoverBackgroundColor: "#E2CC9A"
        },{
            data: [65],
            label:"Organic",
            stack: "Sales in Decaf & Organic",
            backgroundColor: "#F0BC5E",
            hoverBackgroundColor: "#BC914B"
        }]
    },
    options: {
        scales: {
            xAxes: [{
                stacked: true
            }],
            yAxes: [{
                stacked: true
            }]
        }
    }
});